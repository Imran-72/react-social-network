/*
import profileReducer from "./profileReducer";
import diologsReducer from "./diologsReducer";
*/



let store = {
    _state: {
        diologsPage: {
            diologs: [
                {id: 1, name: "Imran"},
                {id: 2, name: "Maga"},
                {id: 3, name: "Heda"},
                {id: 4, name: "Seda"},
            ],
            message: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Hi"},
                {id: 3, message: "Hi"},
                {id: 4, message: "Hi"}
            ],
            newMessageText: ""
        },
        profilePage: {
            posts: [
                {id: 1, message: "Who do you want to become", likesCount: 22},
                {id: 2, message: "I will become a hokage", likesCount: 12}
            ],
            newPostText: ""
        }
    },
    _callSubscriber() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.diologsPage = diologsReducer(this._state.diologsPage, action)

        this._callSubscriber(this._state)
    }
};

