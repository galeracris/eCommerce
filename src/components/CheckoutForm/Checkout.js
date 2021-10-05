import { Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { useState } from "react";
import AddressForm from './AddressForm';
import PaymentForm from "./PaymentForm";
import Confirmation from "../Confirmation";
import { useStateValue } from "../StateProvider/StateProvider";

const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Dato del comprador', 'Detalles del pago'];


  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  
  const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep} /> : <PaymentForm backStep={backStep} nextStep={nextStep} />
  
  
  return (

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h4' align='center'>
          Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(step =>(
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {
            activeStep === steps.length ? (
            <Confirmation/>
            ) : (
            <Form step={activeStep}/>
            )}
        </Paper>
      </main>
  );
};

export default Checkout
