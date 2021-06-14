import {LANGUAGE_CHANGED} from "../actions/actionTypes";
import {REHYDRATE} from 'redux-persist';

const INITIAL_STATE = {
    language: "en",
};

export function UserReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LANGUAGE_CHANGED:
            return {...state, language: action.payload};

        // case REHYDRATE:
        //     return {
        //         ...state,
        //         language: action.payload.language ?  action.payload.language : INITIAL_STATE.language
        //     };
        default:
            return state;
    }
}
