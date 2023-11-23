import {combineReducers} from 'redux'
import categoryReducer from '../../features/category/manager/reducers/categoryReducer'
import brandReducer from "../../features/brand/manager/reducers/brandReducer";

export default combineReducers(
  {
    categoryReducer,
    brandReducer,
  },
)