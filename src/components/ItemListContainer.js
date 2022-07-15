import { Grid } from '@mui/material';
import { useEffect, useState } from "react";
import productos from '../utils/productsMock'
import Container from '@mui/material/Container';
import ItemList from './ItemList';


const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    })
  }

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response)
        console.log(response)
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
          <ItemList products={products}/>
        </Grid>
      </Container>
    </div>
  )

}

export default ItemListContainer