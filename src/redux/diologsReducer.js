let ADD_MESSAGE = "ADD_MESSAGE"


let initialState = {
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
    ]
}
const diologsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                message: [...state.message, {id: 5, message: action.newMessageText}],
            }
        default:
            return state
    }
}
export const addMessageAC = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})

export default diologsReducer;

