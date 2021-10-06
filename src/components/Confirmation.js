import React from 'react';
import { useStateValue } from './StateProvider/StateProvider';
import { Divider, IconButton, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { actionTypes } from './Reducer/reducer';

const Confirmation = () => {


  const [{ confirmationId }] = useStateValue();


  return (
    <>
      <Typography variant='h5'>{` Su número de orden es: #${confirmationId} `}</Typography>
      <Typography variant='h4'>Gracias por su compra!!</Typography>
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
