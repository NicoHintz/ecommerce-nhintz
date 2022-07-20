import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount';

export default function Item({item}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="330"
        image={item.image}
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
        <ItemCount stock={item.stock}/>
      </CardActions>
    </Card>
  );
}