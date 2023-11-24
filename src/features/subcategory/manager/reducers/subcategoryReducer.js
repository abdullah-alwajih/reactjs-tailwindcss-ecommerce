import ACTIONS_TYPES from "../../../../core/manager/actionsTypes";

const initial = {
    category: [],
    loading: true,
}

const subcategoryReducer = (state = initial, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.CATEGORY_GET_LIST:
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        case ACTIONS_TYPES.CATEGORY_CREATE:
            return {
                category: action.payload,
                loading: false
            }
        case ACTIONS_TYPES.GET_ERROR:
            return {
                loading: true,
                category: action.payload,
            }
        default:
            return state;
    }
}
export default subcategoryReducer