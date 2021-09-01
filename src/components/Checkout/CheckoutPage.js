import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { ProductosJSON } from '../ProductosDatos';
import CheckoutCard from './CheckoutCard';
import Total from '../Total/Total';

    const useStyles = makeStyles((theme) =>({
        root:{
            flexGrow: 1,
            padding: "2rem",
        },
    }));

    const CheckoutPage = () => {
        const classes = useStyles()


        function FormRow () {
            return(
                <React.Fragment>
                    {ProductosJSON.map(item => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CheckoutCard key={item.id} Producto={item}/>  
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
                </Grid>
            </Grid>
        </div>
    );

}

export default CheckoutPage;