import React from 'react';
import Review from './Review';
import { Divider, Typography } from '@material-ui/core';
import { actionTypes, getBasketTotal } from '../Reducer/reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import accounting from 'accounting';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import AddressForm from './AddressForm';

 
const CARD_ELEMENTS_OPTIONS = {
  iconStyle: "solid",
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
  
}
//   const docRef = await addDoc(collection(db, "orden"), {
//   nombre: {firstName},
//   telefono: {telefono},
//   email: {email},
//   date: firebase.firestore.Timestamp.fromDate(new Date()),
//   total: (getBasketTotal(basket), "$")
// });

// console.log(docRef.id)
 
  
//   orden.add(newOrden).then(({id}) => {
//     setOrderId(id);
//   }).catch(err=> {
//     setError(err);
//   }).finally(() => {
//     setLoading(false)
//   });



//   return(
//     <form onSubmit={HandleSubmit}>
//       <CardElement options={CARD_ELEMENTS_OPTIONS}/>
//       <div style={{display: "flex", justifyContent:"space-between", marginTop:"1rem"}}>
//       <Button variant="outlined" onClick={backStep}>ATRÁS</Button>
//       <Button disabled={false} type="submit" variant="contained" color="primary">{`Pagar ${accounting.formatMoney(getBasketTotal(basket), "$")}`}</Button>
//       </div>
//     </form>
// )


const PaymentForm = ({backStep, nextStep}) => {

  return (
    <>
     <Review /> 
     <Divider />
      <Typography variant="h6" gutterBottom style={{margin:"20px 0"}}>
          Método de pago
      </Typography>
          <CheckoutForm backStep={backStep} nextStep={nextStep} />
    </>
  )
}

export default PaymentForm
