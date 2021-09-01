import './App.css';
// import Producto from '../src/components/Productos/Producto';
import Navbar from './components/Navbar/Navbar';
// import ContainerProductos from '../src/components/ContainerProductos/ContainerProductos';
import CheckoutPage from '../src/components/Checkout/CheckoutPage';
// import CheckoutCard from './components/Checkout/CheckoutCard';

function App() {
  return (
    <div className="App">
      <CheckoutPage />
      {/* <CheckoutCard /> */}
      <Navbar />
      {/* <ContainerProductos /> */}
      {/* <Producto /> */}
    </div>
  );
}

export default App;
