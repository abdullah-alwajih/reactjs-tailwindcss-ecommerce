import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../../notifaction/manager/hooks/useNotifaction'
import {createSubcategory} from "../actions/subcategoryAction";
import {getCategoryList} from "../../../category/manager/actions/categoryAction";

const useAddSubcategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList())
  }, [])
  const [category, setCategory] = useState('0')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(true)
  //get last categories state from redux
  const categories = useSelector(state => state.categoryReducer.category)
  //get last sub subcategory state from redux
  const subcategory = useSelector(state => state.subcategoryReducer.subcategory)
  //to change name state
  const onChangeName = (event) => {
    event.persist();
    setName(event.target.value)
  }
  //when image change save it
  const onChangeCategory = (event) => setCategory(event.target.value)
  //save data in database
  const handelSubmit = async (event) => {
    event.preventDefault();
   
    if (category === "0") {
      notify("من فضلك اختر تصنيف رئيسي", "warn")
      return;
    }
    if (name === "") {
      notify("من فضلك ادخل اسم التصنيف", "warn")
      return;
    }
    setLoading(true)
    const data = {
      category,
      name,
    }
    await dispatch(createSubcategory(data))
    setLoading(false)
  }
  useEffect(() => {
    if (loading === false) {
      setName("")
      setCategory(null)
      if (subcategory.status === 201) {
        notify('تمت عملية الاضافة بنجاح', "success");
      } else if (subcategory === "Error Error: Request failed with status code 400") {
        notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn")
      } else {
        notify('هناك مشكله فى عملية الاضافة', "error");
      }
      setLoading(true)
    }
  }, [loading])
  return [category, name, loading, categories, subcategory, onChangeCategory, handelSubmit, onChangeName]
};
export default useAddSubcategory
