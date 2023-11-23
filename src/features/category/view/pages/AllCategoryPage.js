import React from 'react'
import CategoryContainer from '../components/CategoryContainer'
import Pagination from '../../../../Components/Uitily/Pagination'
import useCategoryList from '../../manager/hooks/useCategoryList'

const AllCategoryPage = () => {
  const [category, loading, pageCount, getPage] = useCategoryList(1, 6);
  return (
    <div style={{minHeight: '670px'}}>
      <CategoryContainer data={category.data} loading={loading}/>
      {pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage}/>) : null}
    </div>
  )
}
export default AllCategoryPage
