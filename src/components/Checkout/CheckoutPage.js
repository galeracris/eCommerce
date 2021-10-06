import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import CheckoutCard from './CheckoutCard';
import Total from '../Total/Total';
import { actionTypes } from '../Reducer/reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '2rem',
    marginTop: '10vh',
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const clearBasket = (id) => dispatch({ type: actionTypes.CLEAR_BASKET, id });

  function FormRow() {
    return (
      <React.Fragment>
        {basket?.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CheckoutCard key={item.id} Producto={item} />
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align='center' gutterBottom variant='h4'>
            Carrito de compra
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>

        <Grid item xs={12} sm={4} md={3} container variant='h4'>
          <Total />

          <Link to='/'>
            <IconButton className='homeIndex'>
              <HomeIcon />
              Volver al inicio
            </IconButton>
          </Link>
        </Grid>

        <IconButton aria-label='Vaciar del carrito' onClick={clearBasket}>
          Vaciar carrito de compras
          <ClearAllIcon fontSize='large' />
        </IconButton>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
