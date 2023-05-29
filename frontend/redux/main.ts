// Define the reducer function
import {createStore} from "redux";
import {is_logged} from "../backend_connect/ic_agent";

export function reducer(state = initialState, action: any) {
    switch (action.type) {
        case 'TOGGLE_NAV':
            return {
                ...state,
                isNavOpen: !state.isNavOpen,
            };

        case 'TOGGLE_DARK':
            document.querySelector("body")?.classList.toggle("dark");
            return {
                ...state,
                isDarkMode: !state.isDarkMode,
            };

        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
            };
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
            };
        default:
            return state;
    }
}


const initialState = {
    count: 0,
    isNavOpen: false,
    isDarkMode: true,
    isLoggedIn: await is_logged(),
};
export const TOGGLE_NAV = 'TOGGLE_NAV';
export const TOGGLE_DARK = 'TOGGLE_DARK';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';

export const toggle = () => ({
    type: TOGGLE_NAV,
});

export const toggleDarkMode = () => ({
    type: TOGGLE_DARK,
});


export const reduxLogout = () => ({
    type: LOGOUT,
});

export const reduxLogin = () => ({
    type: LOGIN,
});

export const logout = () => ({
    type: LOGOUT,
});

const store = createStore(reducer);
export default store;