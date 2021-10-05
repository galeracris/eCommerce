import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Producto from '../Productos/Producto';
import { db } from 'services/firestore';

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
      const latasCollection = collection(db, 'latas');

      // 4 obtener Snapshot de la lista
      const latasSnapshot = await getDocs(latasCollection);

      // 5 obtener datos en forma de json con data()
      const latasList = latasSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // 6 setear el estado con la lista
      setLatas(latasList);
    };
    // ejecutar la funcion asincronica
    getLatas();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {latas.map((lata) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Producto key={lata.id} data={lata} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ContainerProductos;
