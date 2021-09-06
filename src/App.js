import './App.css';
import Navbar from './components/Navbar/Navbar';
import ContainerProductos from '../src/components/ContainerProductos/ContainerProductos';
import CheckoutPage from '../src/components/Checkout/CheckoutPage';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import SignIn from './components/SIgnIn/SignIn';
import SignUp from './components/Signup/SignUp';

// import Loading from './components/Loading/Loading';

function App() {
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
          {/* <Loading /> */}
          <CheckoutPage/>
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
