
import ACTIONS_TYPES from "../../../../core/manager/actionsTypes";

const initial = {
    brand: [],
    loading: true,
}
const brandReducer = (state = initial, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.BRAND_GET_LIST:
            return {
                ...state,
                brand: action.payload,
                loading: false,
            }
        case ACTIONS_TYPES.BRAND_CREATE:
            return {
                brand: action.payload,
                loading: false
            }
        case ACTIONS_TYPES.GET_ERROR:
            return {
                loading: true,
                brand: action.payload,
            }
        default:
            return state;
    }
}
export default brandReducer