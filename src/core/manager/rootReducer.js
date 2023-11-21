import {combineReducers} from 'redux'
import categoryReducer from '../../features/category/manager/reducers/categoryReducer'

export default combineReducers ({
    allCategory:  categoryReducer ,
})