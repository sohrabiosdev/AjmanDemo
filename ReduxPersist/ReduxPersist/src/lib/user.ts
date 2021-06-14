import store from "../boot/store";
import {LANGUAGE_CHANGED} from "../actions/actionTypes";


export function setLanguage(code) {
    store.dispatch({
        type: LANGUAGE_CHANGED,
        payload: code,
    });
}

export function isAppRTL() {
    return store.getState().User.language === "ar";
}


export function getCurrentLanguage() {
        return store.getState().User.language ;
}
