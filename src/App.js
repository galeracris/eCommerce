import "./App.css";
// import Producto from '../src/components/Productos/Producto';
import Navbar from "./components/Navbar/Navbar";
import ContainerProductos from "../src/components/ContainerProductos/ContainerProductos";
import CheckoutPage from "../src/components/Checkout/CheckoutPage";
// import CheckoutCard from './components/Checkout/CheckoutCard';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App container">
        <Navbar />
        <Switch>
          <Route path="/checkout-page">
            <CheckoutPage />
          </Route>
          <Route path="/">
            <ContainerProductos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
