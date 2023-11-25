import {combineReducers} from 'redux'
import categoryReducer from '../../features/category/manager/reducers/categoryReducer'
import brandReducer from "../../features/brand/manager/reducers/brandReducer";
import subcategoryReducer from "../../features/subcategory/manager/reducers/subcategoryReducer";

export default combineReducers(
  {
    categoryReducer,
    subcategoryReducer,
    brandReducer,
  },
)