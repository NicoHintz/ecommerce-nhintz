import Item from './Item/Item'
import { Grid } from '@mui/material';

const ItemList = ({products}) => {
  return(
    
      products.map(
        product => (
          <Grid item md={4} key={product.id}>
            <Item
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              stock={product.stock}
              category={product.category}
              id={product.id}
            />
          </Grid>
        )
      )
    
  )
}
export default ItemList;






// import CardItem from '../components/Card/Card'
// import { Grid } from '@mui/material';
// // import { useState, useEffect } from 'react';


// const CardList = ({ title, products }) => {

//     return (
//         <div>
//             {console.log("state products: ", products)}
//             <Grid container spacing={5}>
//                 {
//                     products.map(({ title, price, image, id, stock }) => {
//                         return (
//                             <Grid item md={4} key={id}>
//                                 <CardItem
//                                     title={title}
//                                     price={price}
//                                     image={image}
//                                     stock={stock}
//                                     id={id}
//                                 />
//                             </Grid>
//                         )
//                     })
//                 }
//             </Grid>

//         </div>
//     );
// }

// export default CardList;