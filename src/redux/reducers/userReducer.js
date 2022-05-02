import { globalTypes } from "../actions/globalTypes";

const initialState = {};
export const useReducer = (state = { initialState }, action) => {

    switch (action.type) {
        case globalTypes.AUTH: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};