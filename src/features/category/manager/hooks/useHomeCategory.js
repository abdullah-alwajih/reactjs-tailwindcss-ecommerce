import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getListCategory} from "../actions/categoryAction";

const useHomeCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCategory());
  }, [])
  //get last catgeory state from redux
  const category = useSelector(state => state.allCategory.category)
  //get last loading state from redux
  const loading = useSelector(state => state.allCategory.loading)
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
  return [category, loading, colors]
};
export default useHomeCategory;
