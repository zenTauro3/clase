import { SET_USERNAME, SET_EMAIL, SET_PASSWORD } from "./constants";

const setUsername = (payload: string) => {
    return {type: SET_USERNAME, payload}
};

const setEmail = (payload:string) => {
    return {type: SET_EMAIL, payload}
};

const setPassword = (payload: string) => {
    return {type: SET_PASSWORD, payload};
}

export {setUsername, setEmail, setPassword};