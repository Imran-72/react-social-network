import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Music";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Priloader from "./Common/Priloader/Priloader";


const DiologsContainer = React.lazy(() => import('./Components/Diologs/DiologsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.inizialied) {
            return <Priloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                            <div>
                                <ProfileContainer/>
                            </div>
                        </React.Suspense>
                    }}/>
                    <Route path='/diologs' render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                            <div>
                                <DiologsContainer/>
                            </div>
                        </React.Suspense>
                    }}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    inizialied: state.app.inizialied
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
