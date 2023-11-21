import React, { useEffect } from 'react'
import CategoryContainer from '../components/CategoryContainer'
import Pagination from '../../../../Components/Uitily/Pagination'
import AllCategoryHook from '../../manager/hooks/useAllCategory'
const AllCategoryPage = () => {

    const [category, loading, pageCount, getPage] = AllCategoryHook();

    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryContainer data={category.data} loading={loading} />
            { pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage} />) : null}
        </div>
    )
}

export default AllCategoryPage
