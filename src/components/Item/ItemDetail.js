import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount';

export default function Item({title, price, image, stock, description, category, id}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="330"
        image={image}
        alt={title}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="overline" display="block" color="text.secondary">
          Precio: {price}
        </Typography>
        <Typography variant="overline" display="block" color="text.secondary">
          Stock: {stock}
        </Typography>
        <Typography variant="inherit" display="block" color="text.secondary">
          Descripcion: {description}
        </Typography>
        <Typography variant="overline" display="block" color="text.secondary">
          Categoria: {category}
        </Typography>
        <Typography variant="overline" display="block" color="text.secondary">
          ID: {id}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={stock}/>
      </CardActions>
    </Card>
  );
}
