import { Grid } from '@mui/material';
import { useEffect, useState } from "react";
import product from '../utils/DetailProductsMock'
import Container from '@mui/material/Container';
// import ItemList from './ItemList';
import ItemDetailList from './Item/ItemDetail';

const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const getProducts = () => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(product)
      }, 2000)
    })
  }

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response)

      })
      .catch((err) => {
      })
      .finally(() => {
      })
  }, [])

  return (
    <div className="general-container">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* <ItemList products={products}/> */}
          <ItemDetailList products={products} />
        </Grid>
      </Container>
    </div>
  )

}
export default ItemListContainer