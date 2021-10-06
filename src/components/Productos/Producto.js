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
import accounting from 'accounting';
import { useState } from 'react';
import { actionTypes } from '../Reducer/reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import styled from 'styled-components';
import ItemDetalle from '../ItemDetalle/ItemDetalle';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { ModalBody, ModalFooter } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: '1rem',
    margin: '1rem',
    boxShadow: '0 0 1rem #00000025 inset',
  },
  action: {
    marginTop: '1rem',
  },
  media: {
    height: 0,
    paddingTop: '60.25%',
    backgroundSize: '35%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Producto({ data }) {
  const { id, nombre, precio, rating, imagen, descripcion, tipoProducto } = data;

  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();
  const [expanded, setExpanded] = useState(false);
  const [estadoModal, setEstadoModal] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => dispatch({ type: actionTypes.REMOVE_ITEM, id });

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: { id, nombre, precio, rating, imagen, descripcion, tipoProducto },
    });
  };

  const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
  `;

  const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography className={classes.action} variant='h5' color='textSecondary'>
            {accounting.formatMoney(precio)}
          </Typography>
        }
        title={nombre}
        subheader={
          <>
            <Button onClick={() => setEstadoModal(!estadoModal)} color='success'>
              Ver detalle
            </Button>

            <ItemDetalle estado={estadoModal} cambiarEstado={setEstadoModal}>
              <Contenido>
                <ModalHeader>
                  <CardHeader
                    action={
                      <Typography variant='h5' color='textSecondary'>
                        {nombre} | {accounting.formatMoney(precio)} 
                      </Typography>
                    }
                  />
                </ModalHeader>
               
                <ModalBody>
                  image={imagen} 
                </ModalBody>

                <ModalFooter>
                  <CardActions disableSpacing>
                    <IconButton aria-label='Agregar al carrito' onClick={() => addToBasket()}>
                      Agregar <AddShoppingCart fontSize='large' />
                    </IconButton>

                    <IconButton aria-label='Eliminar del carrito' onClick={() => removeItem()}>
                      Eliminar <RemoveShoppingCartOutlinedIcon fontSize='large' />
                    </IconButton>
                  </CardActions>
                  Id Producto = {id}
                </ModalFooter>
              </Contenido>
            </ItemDetalle>
          </>
        }
      />
      <CardMedia className={classes.media} image={imagen} title={nombre} />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {tipoProducto}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label='Agregar al carrito' onClick={() => addToBasket()}>
          <AddShoppingCart fontSize='large' />
        </IconButton>

        <IconButton aria-label='Eliminar del carrito' onClick={() => removeItem()}>
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
          aria-label='Ver más'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>{descripcion}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
