import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AddressInput from './AddressInput';
import { useStateValue } from '../StateProvider/StateProvider';
import { actionTypes } from '../Reducer/reducer';


const AddressForm = ({nextStep}) => {
  const methods = useForm();
  const [{shippingData}, dispatch] = useStateValue();

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Datos del comprador
      </Typography>
      <FormProvider {...methods}>
      <form onSubmit={ methods.handleSubmit(data => {
          dispatch({
            type: actionTypes.SET_SHIPPINGDATA,
            shippingData: data,
          });
          nextStep();
      })}>
        <Grid container spacing={3}>
          <AddressInput required name="firstName" label="Ingrese su Nombre y Apellido" />
          <AddressInput required name="telefono" label="Ingrese su Teléfono" />
          <AddressInput required name="email" label="Ingrese su E-mail" />
          <AddressInput required name="email2" label="Ingrese nuevamente su E-mail" />
        </Grid>
        <div style={{display: "flex", justifyContent:"space-between", marginTop:"1rem"}}>
          <Button component={Link} to="/checkout-page" variant="contained">Regrese a la página anterior</Button>
          <Button type="submit" variant="contained" color="primary">Siguiente</Button>
        </div>
      </form>
      </FormProvider>
    </>
  )
}

export default AddressForm;

