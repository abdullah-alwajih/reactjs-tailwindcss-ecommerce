import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getBrandList} from "../actions/brandAction";

const useBrandList = (page, limit) => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    dispatch(getBrandList(page, limit));
  }, [])
  //to get state from redux
  const brand = useSelector(state => state.brandReducer.brand)
  const loading = useSelector(state => state.brandReducer.loading)
  //to get pages count
  const pageCount = brand?.paginationResult?.numberOfPages ?? 0;
  //when press pagination
  const getPage = (page) => {
    dispatch(getBrandList(page, limit));
  }
  return [brand, loading, pageCount, getPage]
};
export default useBrandList;
