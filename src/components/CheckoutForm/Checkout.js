import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import useStyles from './styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Confirmation from '../Confirmation';
import { useStateValue } from 'components/StateProvider/StateProvider';

const Checkout = () => {
  const classes = useStyles();
  const [{ step }] = useStateValue();

  const steps = ['Dato del comprador', 'Detalles del pago'];

  const Forms = [<AddressForm />, <PaymentForm />];

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
        {step === steps.length ? <Confirmation /> : Forms[step]}
      </Paper>
    </main>
  );
};

export default Checkout;
