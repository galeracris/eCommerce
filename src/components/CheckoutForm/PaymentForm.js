import React from 'react';
import Review from './Review';
import { Divider } from '@material-ui/core';
import { Elements, CardElement, useStripe, useElements }
 from '@stripe/react-stripe-js' 
const PaymentForm = ({backStep, nextStep}) => {
  return (
    <>
     <Review /> 
     <Divider />
    </>
  )
}

export default PaymentForm
