import { Grid } from '@mui/material';
import { useEffect, useState } from "react";
import productos from '../utils/productsMock'
import Container from '@mui/material/Container';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';




const ItemListContainer = () => {
  const { name } = useParams();
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
        if (name) {
          setProducts(response.filter(productos => productos.category.toLowerCase() === name));

        } else {
          setProducts(response)
        }


      })
      .catch((err) => {
      })
      .finally(() => {
      })
  }, [name])

  return (
    <div className="general-container">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <ItemList products={products} />
        </Grid>
      </Container>
    </div>
  )

}

export default ItemListContainer