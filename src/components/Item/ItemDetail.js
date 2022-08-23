import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
// import CartContext from '../../contexts/CartContext';
import { GContext } from '../../contexts/CartContext';
import Container from '@mui/material/Container';


export default function Item({item}) {
  const { stock } = item
  
  const { isInCart, addItem }= useContext(GContext);

  const [amount, setAmount] = useState(0);
  
  const onAdd = (amount) => {
    if(!isInCart(item.id)){
      setAmount(amount);
      item ={
        'id': item.id,
        'amount': amount,
        'title':item.title,
        'price': item.price,
        'subtotal': parseInt(amount) * parseInt(item.price)
      }
      addItem(item, amount)
    }else{
      alert('Ya existe el item');
    }
  };
  return (
    <div className="general-container">
      <Container maxWidth="lg">
    <Card className='item-detail' sx={{ maxWidth: 400, }}>
      <CardMedia
        component="img"
        height="300"
        image={`${item.image}`}
        alt={item.title}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="overline" display="block" color="text.secondary">
          Precio: {item.price}
        </Typography>
        <Typography variant="overline" display="block" color="text.secondary">
          Stock: {item.stock}
        </Typography>
        <Typography variant="inherit" display="block" color="text.secondary">
          Descripcion: {item.description}
        </Typography>
        <Typography variant="overline" display="block" color="text.secondary">
          Categoria: {item.category}
        </Typography>
        <Typography variant="overline" display="block" color="text.secondary">
          ID: {item.id}
        </Typography>
      </CardContent>
      <CardActions>
        {amount === 0 ? (
        <ItemCount stock={stock} initial={0} onAdd={onAdd} />
      ) : (
        <h1>{amount} items will be bought</h1>
      )}
      <div className="d-flex justify-content-center my-3">
        <Link to="/cart/">
          <button className="btn btn-warning">Go to checkout</button>
        </Link>
      </div>
        
      </CardActions>
    </Card>
    </Container>
    </div>
  );
}




// export default function Item({item}) {
//   const {addItem}= useContext(GContext);
//   const { stock } = item
//   const [amount, setAmount] = useState(0);
//   const onAdd = (amount) => {
//     addItem(item, amount)
//     setAmount(amount);
//     // setCartItems((prevState) => [...prevState, item]);
    
//   };
//   return (
//     <Card sx={{ maxWidth: 355 }}>
//       <CardMedia
//         component="img"
//         height="330"
//         image={`/${item.image}`}
//         alt={item.title}
//       />
//       <CardContent>
//       <Typography gutterBottom variant="h5" component="div">
//           {item.title}
//         </Typography>
//         <Typography variant="overline" display="block" color="text.secondary">
//           Precio: {item.price}
//         </Typography>
//         <Typography variant="overline" display="block" color="text.secondary">
//           Stock: {item.stock}
//         </Typography>
//         <Typography variant="inherit" display="block" color="text.secondary">
//           Descripcion: {item.description}
//         </Typography>
//         <Typography variant="overline" display="block" color="text.secondary">
//           Categoria: {item.category}
//         </Typography>
//         <Typography variant="overline" display="block" color="text.secondary">
//           ID: {item.id}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         {amount === 0 ? (
//         <ItemCount stock={stock} initial={0} onAdd={onAdd} />
//       ) : (
//         <h1>{amount} items will be bought</h1>
//       )}
//       <div className="d-flex justify-content-center my-3">
//         <Link to="/cart/">
//           <button className="btn btn-warning">Go to checkout</button>
//         </Link>
//       </div>
        
//       </CardActions>
//     </Card>
//   );
// }