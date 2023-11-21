import Remote from "../../../../core/data/source/remote";
import CATEGORY_ACTIONS_TYPES from "../CategoryActionsTypes";
import AppTypesActions from "../../../../core/manager/AppTypesActions";
//get all category
export const getListCategory = (limit = 6, page = 1) => async (dispatch) => {
  try {
    const response = await Remote.get(`/api/v1/categories?limit=${limit}&page=${page}`);
    dispatch({
      type: CATEGORY_ACTIONS_TYPES.GET_LIST,
      payload: response,
    })
  } catch (e) {
    dispatch({
      type: AppTypesActions.GET_ERROR, payload: "Error " + e,
    })
  }
}
//get all category with pagination
export const createCategory = (formData) => async (dispatch) => {
  try {
    const response = await Remote.post(`/api/v1/categories`, formData, true);
    dispatch({
      type: CATEGORY_ACTIONS_TYPES.CREATE_CATEGORY, payload: response, loading: true
    })
  } catch (e) {
    dispatch({
      type: AppTypesActions.GET_ERROR, payload: "Error " + e,
    })
  }
}