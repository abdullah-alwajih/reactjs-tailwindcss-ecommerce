import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getListCategory} from "../actions/subcategoryAction";

const useCategoryList = (page, limit) => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    dispatch(getListCategory(page, limit));
  }, [])
  //to get state from redux
  const category = useSelector(state => state.categoryReducer.category)
  const loading = useSelector(state => state.categoryReducer.loading)
  //to get pages count
  const pageCount = category?.paginationResult?.numberOfPages ?? 0;
  //when press pagination
  const getPage = (page) => {
    dispatch(getListCategory(page, limit));
  }
  return [category, loading, pageCount, getPage]
};
export default useCategoryList;
