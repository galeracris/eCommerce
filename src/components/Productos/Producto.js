import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
import accounting from "accounting";
import { useState } from 'react';
import { actionTypes } from "../Reducer/reducer";
import { useStateValue } from "../StateProvider/StateProvider";


const useStyles = makeStyles((theme) => ({
  root:{
    maxWidth: 345,
    padding: "1rem",
    margin: "1rem",
    boxShadow: "0 0 1rem #00000025 inset",
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height:0,
    paddingTop: "56.25%", 
  },
  expand:{
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Producto({Producto: {id, nombre, precio, stock, rating, imagenProducto, descripcion, tipoProducto}}) {
  const classes = useStyles();
  const [{carrito}, dispatch] = useStateValue();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })

  const addToCarrito = (id) => {
    console.log(addToCarrito)
    dispatch({
      type: actionTypes.ADD_TO_CARRITO,
      item:{
        id,
        nombre,
        precio,
        stock,
        rating,
        tipoProducto,
        imagenProducto,
        descripcion,
      }
    })
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
          className={classes.action}
          variant='h5'
          color='textSecondary'
          >
          {accounting.formatMoney(precio)}
          </Typography>
        }
        title={nombre}
        subheader={stock}
      />
      <CardMedia
        className={classes.media}
        image={imagenProducto}
        title={nombre}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {tipoProducto}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Agregar al carrito' onClick={addToCarrito}>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        <IconButton aria-label='Eliminar del carrito' onClick={removeItem}>
        <RemoveShoppingCartOutlinedIcon fontSize='large' />
        </IconButton>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Ver más"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         <Typography paragraph>{descripcion}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
