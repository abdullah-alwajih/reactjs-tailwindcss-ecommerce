import React from 'react'
import {Container, Row, Spinner} from 'react-bootstrap'
import SubTiltle from '../../../../Components/Uitily/SubTiltle'
import BrandCard from './BrandCard'
import useBrandList from "../../manager/hooks/useBrandList";

const BrandFeatured = ({title, btntitle}) => {
  const [brand, loading] = useBrandList(1, 5);
  return (
    <Container>
      {
        loading ? <Spinner animation="border" variant="primary"/> : (
          brand.data?.length ? (
            <>
              <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand"/>
              <Row className='my-1 d-flex justify-content-between'>
                {brand.data.slice(0, 5).map((item, index) => {
                  return (<BrandCard key={index} img={item.image}/>)
                })}
              </Row>
            </>
          ) : null
        )
      }
    </Container>
  )
}
export default BrandFeatured
