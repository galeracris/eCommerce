import React from 'react';
import accounting from "accounting";
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';


const useStyles = makeStyles ((theme) => ({
root:{
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16pt",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color:'white',
    padding:"25px",
    width:"65%",
    height:"20vh"
},
button:{
    marginTop:"1.5rem"
},
}));


const Total = () => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
                <h5>Total items: 3</h5>
                <h5>{accounting.formatMoney(50)}</h5>
                <Button className={classes.button} variant="contained" color="secondary">Check Out</Button>
        </div>
    )
}

export default Total;