import React from 'react';
import accounting from 'accounting';
import { useStateValue } from './StateProvider/StateProvider';
import { getBasketTotal } from './Reducer/reducer';
import { Divider, IconButton, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  const [{ confirmationId }] = useStateValue();

  return (
    <>
      <Typography variant='h6'>{` Su número de orden es: #${confirmationId} `}</Typography>
      <Typography>Gracias por su compra!!</Typography>
      <Divider />
      <div>
        <Link to='/'>
          <IconButton className='homeIndex'>
            <HomeIcon />
            Volver al inicio
          </IconButton>
        </Link>
      </div>
    </>
  );
};

export default Confirmation;
