import React from 'react'
import {Col, Row} from 'react-bootstrap'
import useAddSubcategory from "../../features/subcategory/manager/hooks/useAddSubcategory";
import {ToastContainer} from "react-toastify";

const AdminAddSubCategory = () => {
  const [category, name, loading, categories, subcategory, onChangeCategory, handelSubmit, onChangeName] = useAddSubcategory()
  return (<div>
    <Row className="justify-content-start ">
      <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
      <Col sm="8">
        <input
          type="text"
          value={name}
          onChange={onChangeName}
          className="input-form d-block mt-3 px-3"
          placeholder="اسم التصنيف الفرعي"
        />
        <select name="category" id="cat" className="select mt-3 px-2" onChange={onChangeCategory}>
          <option value="val">إختيار التصنيف الرئيسي</option>
          {categories.data ? (categories.data.map(item => {
            return (<option key={item._id} value={item._id}>{item.name}</option>)
          })) : null}
        </select>
      </Col>
    </Row>
    <Row>
      <Col sm="8" className="d-flex justify-content-end ">
        <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
      </Col>
    </Row>
    <ToastContainer/>
  </div>)
}
export default AdminAddSubCategory
