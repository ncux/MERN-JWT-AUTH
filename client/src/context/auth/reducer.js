import { SET_LOADING } from "../types";

export const Reducer = (state, action) => {

    switch (action.type) {

        case SET_LOADING:
            return { ...state,
                loading: true
            };

        default:
            return state;
    }
};


