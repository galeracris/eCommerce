import './App.css';
import Navbar from './components/Navbar/Navbar';
import ContainerProductos from '../src/components/ContainerProductos/ContainerProductos';
import CheckoutPage from '../src/components/Checkout/CheckoutPage';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SIgnIn/SignIn';
import SignUp from './components/Signup/SignUp';
// import { useEffect } from 'react';
// import { Auth } from './components/Firebase/auth';
// import { actionTypes } from './components/Reducer/reducer';
import { useStateValue } from './components/StateProvider/StateProvider';
import Checkout from "./components/CheckoutForm/Checkout";

function App() {

    const [{user}, dispatch] = useStateValue();
    
  // useEffect(()=>{
  //   Auth.onAuthStateChanged((authUser)=>{
  //     console.log(authUser);
  //     if (authUser){
  //       dispatch({
  //         type: actionTypes.SET_USER,
  //         user: authUser,
  //       })
  //     }
  //   })
  // }, [])

  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/checkout-page">
              <CheckoutPage/>
            </Route>
            <Route exact path="/checkout">
              <Checkout/>
            </Route>
            <Route exact path="/">
              <ContainerProductos />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
