import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import useStyles from './styles';

import { useStateValue } from 'components/StateProvider/StateProvider';

import Confirmation from 'components/Confirmation';
import PaymentForm from './PaymentForm';
import AddressForm from './AddressForm';

const Checkout = () => {
  const classes = useStyles();
  const [{ step }] = useStateValue();

  const steps = ['Dato del comprador', 'Detalles del pago', 'Confirmación'];

  const Forms = [<AddressForm />, <PaymentForm />, <Confirmation />];

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component='h1' variant='h4' align='center'>
          Checkout
        </Typography>
        <Stepper activeStep={step} className={classes.stepper}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {Forms[step]}
      </Paper>
    </main>
  );
};

export default Checkout;
