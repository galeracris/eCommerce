import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
// import { getData } from 'firebase';
import { getData } from '../Firebase/index'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Producto from '../Productos/Producto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));


const ContainerProductos = () => {
  const classes = useStyles();
  // 1 estado para mostrar la lista
  const [latas, setLatas] = useState([]);

  useEffect(() => {

    // 2 PIDO LOS DATOS (async/await)
    const getLatas = async () => {
      // 3 obtener colleccion
        const latasCollection = collection(getData(), 'latas');

        // 4 obtener Snapshot de la lista
        const latasSnapshot = await getDocs(latasCollection);

        // 5 obtener datos en forma de json con data()
        const latasList = latasSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // 6 setear el estado con la lista
        console.log(latasList);
        setLatas(latasList);
    };
    // ejecutar la funcion asincronica
    getLatas();
  }, []);

return (
    <div className={classes.root}>
    <Grid container spacing={3} />
    {/* { {latas.map(latasItem => ( }
       { {  <Grid item xs={12} sm={6} md={4} lg={3}>
       <Producto key={latasItem.id} data={latasItem} /> } } */}

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <getLatas />
      </Grid>
  ))
      </div>
    );
      }

export default ContainerProductos;
