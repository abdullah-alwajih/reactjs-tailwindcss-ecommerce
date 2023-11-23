import React from 'react'
import BrandContainer from '../components/BrandContainer'
import Pagination from '../../../../Components/Uitily/Pagination'
import useBrandList from "../../manager/hooks/useBrandList";

const AllBrand = () => {
  const [brand, loading, pageCount, getPage] = useBrandList(1, 6);
  return (
    <div style={{minHeight: '670px'}}>
      <BrandContainer data={brand.data} loading={loading}/>
      {pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage}/>) : null}
    </div>
  )
}
export default AllBrand
