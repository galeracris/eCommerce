import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import CheckoutCard from './CheckoutCard';
import Total from '../Total/Total';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider/StateProvider";


    const useStyles = makeStyles((theme) =>({
        root:{
            flexGrow: 1,
            padding: "2rem",
            marginTop:"10vh"
        },
        arrowIndex:{
            margin:"0",
            borderRadius: 3,
            border: 0,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
    }));

    const CheckoutPage = () => {
        const classes = useStyles();
        const [{carrito}, dispatch] = useStateValue();


        function FormRow () {
            return(
                <React.Fragment>
                    {carrito?.map(itemCarrito => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CheckoutCard key={itemCarrito.id} Producto={itemCarrito}/>  
                        </Grid>
                    ))}
                </React.Fragment>
            );
        }


    return(
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Shopping
                    </Typography>
                </Grid>


                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow/>
                </Grid>

                <Grid item xs={12} sm={4} md={3} container variant='h4'>
                    <Total/>
                <Link to="/">
                <Button className="arrowIndex">
                        <ArrowBackIcon />
                        Volver al inicio
                </Button>
                </Link>
                </Grid>
            </Grid>
        </div>
    );

}

export default CheckoutPage;