interface Action{
    type: string,
    payload: string
}

const initialState = {username: "", email: "", password: ""};

function reducer (state = initialState, action: Action) {
    switch (action.type){
        case "SET_USERNAME": return {...state, username: action.payload};
        case "SET_EMAIL": return {...state, email: action.payload};
        case "SET_PASSWORD": return {...state, password: action.payload};
        default: return state;
    }
};

export default reducer