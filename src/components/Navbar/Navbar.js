import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../Imagenes/logo-bco.png';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { totalItemsInBasket } from '../Reducer/reducer';
import {useHistory} from "react-router-dom";
// import { actionTypes } from "../Reducer/reducer"
// import { Auth } from "firebase"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '7rem',
  },
  appBar: {
    backgroundColor: 'black',
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: '10px',
    height: '4rem',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();


  // const handleAuth = () => {
  //   if(user){
  //     Auth.signOut();
  //     dispatch({
  //       type: actionTypes.EMPTY_BASKET,
  //       basket: [],
  //     });
  //     dispatch({
  //       type: actionTypes.SET_USER,
  //       user: null,
  //     });
  //     history.push("/")
  //   }
  // }

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <div className='container'>
          <Toolbar>
            <Link to='/'>
              <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                <img src={logo} className={classes.image} alt='Cervecería 1930' />
              </IconButton>
            </Link>
            <div className={classes.grow} />
            <Typography variant='h6' component='p'>
              Hola {user ? user.email : "Invitado"}
            </Typography>
            <div className={classes.button}>
              <Link to='/checkout-page'>
                <IconButton aria-label='show cart items' color='inherit'>
                  <Badge badgeContent={totalItemsInBasket(basket)} color='secondary'>
                    <ShoppingCart fontSize='large' color='primary' />
                  </Badge>
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}
// 