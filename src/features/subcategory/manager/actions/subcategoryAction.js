import Remote from "../../../../core/data/source/remote";
import ACTIONS_TYPES from "../../../../core/manager/actionsTypes";

const _endpoint = '/api/v1/subcategories'
//get all category with pagination
export const createSubcategory = (data) => async (dispatch) => {
  try {
    const response = await Remote.post(`${_endpoint}`, data);
    dispatch({
      type: ACTIONS_TYPES.SUBCATEGORY_CREATE,
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