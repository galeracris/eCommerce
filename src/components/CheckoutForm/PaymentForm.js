import React from 'react';
import Review from './Review';
import { Button, Divider, Typography } from '@material-ui/core';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { getBasketTotal } from '../Reducer/reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import accounting from 'accounting';
import axios from "axios";


const stripePromise = loadStripe("pk_test_51JeW0gDODZ3T0eM4VIePSfypOsLtZNstEneYjJt8xkcjSOkmfh43NpKOZ2ZJVuUTpkeKWf2dgL5QkqEmSRJvFXvO00DTFrx8O0")
 
const CARD_ELEMENTS_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(240, 57, 122",
      color: "#333",
      fontSize:"18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid:{
      color: "#e5424d",
      ":focus":{
        color: "#303238",
      },
    },
  },
};



const CheckoutForm = ({backStep, nextStep}) => {
const [{basket}, dispatch] = useStateValue();
const stripe = useStripe();
const elements = useElements();

const handleSubmit = async(e) => {
  e.preventDefault();
  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: "card",
    card: elements.getElement(CardElement)
  })
  if (!error){
    const {id} = paymentMethod;
    try{
      const { data } = await axios.post("http://localhost:3001/api/checkout",{
        id,
        amount: getBasketTotal(basket) * 100,
      })
        console.log(data);
  }
    catch(error){console.log(error)}
  }
}


  return(
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENTS_OPTIONS}/>
      <div style={{display: "flex", justifyContent:"space-between", marginTop:"1rem"}}>
      <Button variant="outlined" onClick={backStep}>ATRÁS</Button>
      <Button disabled={false} type="submit" variant="contained" color="primary">{`Pagar ${accounting.formatMoney(getBasketTotal(basket), "$")}`}</Button>
      </div>
    </form>
  )
}





const PaymentForm = ({backStep, nextStep}) => {
  return (
    <>
     <Review /> 
     <Divider />
      <Typography variant="h6" gutterBottom style={{margin:"20px 0"}}>
          Método de pago
      </Typography>
        <Elements stripe={stripePromise}>
          <CheckoutForm backStep={backStep} nextStep={nextStep} />
        </Elements> 
    </>
  )
}

export default PaymentForm
