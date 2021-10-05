import React from 'react';
import Review from './Review';
import { Divider } from '@material-ui/core';
import { actionTypes, getBasketTotal } from '../Reducer/reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import accounting from 'accounting';
import { Button } from 'reactstrap';
import { Timestamp } from '@firebase/firestore';

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

const CheckoutForm = () => {
  const [{ basket }, dispatch] = useStateValue();

  /*
const docRef = await addDoc(collection(db, 'orden'), {
  nombre: { firstName },
  telefono: { telefono },
  email: { email },
  date: firebase.firestore.Timestamp.fromDate(new Date()),
  total: (getBasketTotal(basket), '$'),
});

console.log(docRef.id);

orden
  .add(newOrden)
  .then(({ id }) => {
    setOrderId(id);
  })
  .catch((err) => {
    setError(err);
  })
  .finally(() => {
    setLoading(false);
  });

  */
  return (
    <form>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <Button variant='outlined'>ATRÁS</Button>
        <Button disabled={false} type='submit' variant='contained' color='primary'>{`Pagar ${accounting.formatMoney(
          getBasketTotal(basket),
          '$'
        )}`}</Button>
      </div>
    </form>
  );
};

const PaymentForm = () => {
  const [{ shippingData, basket }, dispatch] = useStateValue();

  const handleCheckout = () => {
    const { firstName, email, phone } = shippingData;

    const orderData = {
      nombre: firstName,
      telefono: phone,
      email: email,
      date: Timestamp.now(),
      total: getBasketTotal(basket, '$'),
    };
    console.log('🚀 ~ handleCheckout ~ orderData', orderData);
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
