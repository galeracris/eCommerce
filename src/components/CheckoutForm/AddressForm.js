import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AddressInput from './AddressInput';
import { actionTypes } from 'components/Reducer/reducer';
import { useStateValue } from 'components/StateProvider/StateProvider';

const AddressForm = () => {
  const { handleSubmit, control } = useForm();

  const [, dispatch] = useStateValue();

  const formSubmit = (data) => {
    dispatch({ type: actionTypes.SET_SHIPPINGDATA, shippingData: data });
    dispatch({ type: actionTypes.SET_STEP, payload: 1 });
  };

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Datos del comprador
      </Typography>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Grid container spacing={3}>
          <AddressInput control={control} label='Nombre completo' name='firstName' />
          <AddressInput control={control} label='Telefono' name='phone' />
          <AddressInput control={control} label='Email' name='email' />
          <AddressInput control={control} label='Confirme email' name='email2' />
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <Button component={Link} to='/checkout-page' variant='contained'>
            Regrese a la página anterior
          </Button>
          <Button type='submit' variant='contained' color='primary'>
            Siguiente
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddressForm;
