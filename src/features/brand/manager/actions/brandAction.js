import ACTIONS_TYPES from "../../../../core/manager/actionsTypes";
import Remote from "../../../../core/data/source/remote";

const _endpoint = '/api/v1/brands'

//get all category
export const getBrandList = (page, limit) => async (dispatch) => {
  try {
    const response = await Remote.get(`${_endpoint}`, {page, limit});
    dispatch({
      type: ACTIONS_TYPES.BRAND_GET_LIST,
      payload: response,
    })
  } catch (e) {
    dispatch({
      type: ACTIONS_TYPES.GET_ERROR, payload: "Error " + e,
    })
  }
}
//get all category with pagination
export const createBrand = (formData) => async (dispatch) => {
  try {
    const response = await Remote.post(`${_endpoint}`, formData, true);
    dispatch({
      type: ACTIONS_TYPES.BRAND_CREATE,
      payload: response,
      loading: true
    })
  } catch (e) {
    dispatch({
      type: ACTIONS_TYPES.GET_ERROR, payload: "Error " + e,
    })
  }
}