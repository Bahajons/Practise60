import { globalTypes } from "../actions/globalTypes"

const initialState = { loading: false }
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case globalTypes.LOADING: {
            return { ...state, loading: action.payload };
        }
        default: {
            return state;
        }
    }
};