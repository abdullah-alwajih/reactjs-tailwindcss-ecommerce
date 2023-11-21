import CATEGORY_ACTIONS_TYPES from "../CategoryActionsTypes";
import AppTypesActions from "../../../../core/manager/AppTypesActions";

const inital = {
    category: [],
    loading: true,
}
const categoryReducer = (state = inital, action) => {
    switch (action.type) {
        case CATEGORY_ACTIONS_TYPES.GET_LIST:
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        case CATEGORY_ACTIONS_TYPES.CREATE_CATEGORY:
            return {
                category: action.payload,
                loading: false
            }
        case AppTypesActions.GET_ERROR:
            return {
                loading: true,
                category: action.payload,
            }
        default:
            return state;
    }
}
export default categoryReducer