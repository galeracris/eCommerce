import React from 'react';
import Review from './Review';
import { Divider } from '@material-ui/core';
import { actionTypes, getBasketTotal } from '../Reducer/reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import accounting from 'accounting';
import { Button } from 'reactstrap';
import { Timestamp } from '@firebase/firestore';
import { addOrder } from 'services/firestore';

const CARD_ELEMENTS_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: 'rgb(240, 57, 122',
      color: '#333',
      fontSize: '18px',
      '::placeholder': {
        color: '#ccc',
      },
    },
    invalid: {
      color: '#e5424d',
      ':focus': {
        color: '#303238',
      },
    },
  },
};

const PaymentForm = () => {
  const [{ shippingData, basket }, dispatch] = useStateValue();

  const handleCheckout = async () => {
    const { firstName, email, phone } = shippingData;

    const orderData = {
      nombre: firstName,
      telefono: phone,
      email: email,
      date: Timestamp.now(),
      total: getBasketTotal(basket, '$'),
    };

    addOrder(orderData);
  };

  const handleBack = () => dispatch({ type: actionTypes.SET_STEP, payload: 0 });

  const totalBasket = accounting.formatMoney(getBasketTotal(basket), '$');

  return (
    <>
      <Review />
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <Button onClick={handleBack} variant='outlined'>
          ATRÁS
        </Button>
        <Button
          onClick={handleCheckout}
          disabled={false}
          variant='contained'
          color='primary'
        >{`Pagar ${totalBasket}`}</Button>
      </div>
    </>
  );
};

export default PaymentForm;
