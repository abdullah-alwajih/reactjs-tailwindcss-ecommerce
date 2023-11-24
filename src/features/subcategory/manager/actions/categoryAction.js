import Remote from "../../../../core/data/source/remote";
import ACTIONS_TYPES from "../../../../core/manager/actionsTypes";

const _endpoint = '/api/v1/categories'


//get all category
export const getListCategory = (page, limit) => async (dispatch) => {
  try {
    const response = await Remote.get(`${_endpoint}`, {page, limit});
    dispatch({
      type: ACTIONS_TYPES.CATEGORY_GET_LIST,
      payload: response,
    })
  } catch (e) {
    dispatch({
      type: ACTIONS_TYPES.GET_ERROR,
      payload: "Error " + e,
    })
  }
}
//get all category with pagination
export const createCategory = (formData) => async (dispatch) => {
  try {
    const response = await Remote.post(`${_endpoint}`, formData, true);
    dispatch({
      type: ACTIONS_TYPES.CATEGORY_CREATE,
      payload: response,
      loading: true
    })
  } catch (e) {
    dispatch({
      type: ACTIONS_TYPES.GET_ERROR,
      payload: "Error " + e,
    })
  }
}