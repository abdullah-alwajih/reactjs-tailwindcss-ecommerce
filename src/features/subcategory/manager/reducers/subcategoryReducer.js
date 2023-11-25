import ACTIONS_TYPES from "../../../../core/manager/actionsTypes";

const initial = {
  subcategory: [],
  loading: true,
}
const subcategoryReducer = (state = initial, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SUBCATEGORY_CREATE:
      return {
        ...state,
        subcategory: action.payload,
        loading: false
      }
    case ACTIONS_TYPES.GET_ERROR:
      return {
        loading: true,
        subcategory: action.payload,
      }
    default:
      return state;
  }
}
export default subcategoryReducer