import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';


export default function Item({item}) {
  const {setCartItems}= useContext(CartContext);
  
  const { stock } = item
  const [amount, setAmount] = useState(0);
  const onAdd = (amount) => {
    setAmount(amount);
    setCartItems((prevState) => [...prevState, item]);
    
  };
  return (
    <Card sx={{ maxWidth: 355 }}>
      <CardMedia
        component="img"
        height="330"
        image={`/${item.image}`}
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
  );
}