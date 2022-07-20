import { Grid } from '@mui/material';
import { useEffect, useState } from "react";
import productsMock from '../utils/productsMock'
import Container from '@mui/material/Container';
// import ItemList from './ItemList';
import ItemDetail from './Item/ItemDetail';

const ItemListContainer = () => {
  const id = 1;
    
  const [item, setItem] = useState([]);

  const getItem = (response) => {
      response = response.filter((element) => element.id === id);
      return response
  };

  useEffect(
      () => {

          let promiseItem = new Promise((resolve, reject) => {
              setTimeout(
                  () => {
                      resolve(productsMock);
                  },
                  2000
              )
          });
      
          promiseItem
          .then((response) => {setItem(getItem(response));})
          .catch((error) => {console.log(error);})
      
      },
      []
  );
  console.log(item)
  
  return (
    <div className="general-container">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {
            item.map(
              item => <ItemDetail key={item.id} item={item} />
            )
          
          }
        </Grid>
      </Container>
    </div>
  )

}
export default ItemListContainer