import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';


export default function Item({title, price, image, stock, id}) {
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
      </CardContent>
      <CardActions>
        <ItemCount stock={stock}/>
        <Link to={`item/${id}`}> 
          <Button size="small">Mas Detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
