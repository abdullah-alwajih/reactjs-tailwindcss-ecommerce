import React, {useEffect, useState} from 'react'
import {Col, Row} from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import add from '../../images/add.png'
import MultiImageInput from "react-multiple-image-input";
import {useDispatch, useSelector} from "react-redux";
import {getCategoryList} from "../../features/category/manager/actions/categoryAction";

const AdminAddProducts = () => {
  const [images, setImages] = useState([]);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList())
  }, [])
  
  const categories = useSelector(state => state.categoryReducer.category)
  
  const onSelect = () => {
  }
  const onRemove = () => {
  }
  const options = [
    {name: "التصنيف الاول", id: 1},
    {name: "التصنيف الثاني", id: 2},
  ];
  
  
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            allowCrop={false}
            theme={"light"}
            max={4}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر المنتج"
          />
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 ">
            <option value="val">التصنيف الرئيسي</option>
            <option value="val">التصنيف الاول</option>
            <option value="val2">التصنيف الثاني</option>
            <option value="val2">التصنيف الثالث</option>
            <option value="val2">التصنيف الرابع</option>
          </select>
          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{color: "red"}}
          />
          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 ">
            <option value="val">الماركة</option>
            <option value="val2">التصنيف الماركة الاولي</option>
            <option value="val2">التصنيف الماركة الثانيه</option>
            <option value="val2">التصنيف الرابع</option>
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            <div
              className="color ms-2 border  mt-1"
              style={{backgroundColor: "#E52C2C"}}></div>
            <div
              className="color ms-2 border mt-1 "
              style={{backgroundColor: "white"}}></div>
            <div
              className="color ms-2 border  mt-1"
              style={{backgroundColor: "black"}}></div>
            <img src={add} alt="" width="30px" height="35px" className=""/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
      </Row>
    </div>
  )
}
export default AdminAddProducts
