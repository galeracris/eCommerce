import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Producto from '../Productos/Producto';
import { ProductosJSON } from '../ProductosDatos';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function ContainerProductos() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          {
              ProductosJSON.map(Producto => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Producto key={Producto.id} Producto={Producto}/>  
                    </Grid>
              ))
          }
      </Grid>
    </div>
  );
}
