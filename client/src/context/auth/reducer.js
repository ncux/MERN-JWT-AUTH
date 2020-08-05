import { SET_LOADING, SET_USER_DATA } from "../types";

export const Reducer = (state, { type, payload }) => {

    switch (type) {

        case SET_LOADING:
            return { ...state,
                loading: true
            };

        case SET_USER_DATA:
            console.log(payload);
            return { ...state,
                userData: payload,
                isAuthenticated: true,
                loading: false
            };

        default:
            return state;
    }
};


