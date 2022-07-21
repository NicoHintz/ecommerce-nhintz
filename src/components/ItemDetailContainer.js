import { useEffect, useState, useCallback } from "react";
import productsMock from '../utils/productsMock'
import Container from '@mui/material/Container';
// import ItemList from './ItemList';
import ItemDetail from './Item/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  const {id} = useParams();
  const [item, setItem] = useState([]);

  const getItem = useCallback(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsMock.filter(producto => producto.id === parseInt(id)));
      }, 2000)
    })
  }, [id]);

  useEffect(() => {
    getItem()
      .then((response) => {
        setItem(response[0]);
      })
      .catch((err) => {
      })
      .finally(() => {
      })
  }, [getItem, id])

  return (
    <div className="general-container">
      <Container maxWidth="lg">
        <ItemDetail key={item.id} item={item} />
      </Container>
    </div>
  )
}

export default ItemDetailContainer;
