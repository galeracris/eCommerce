import './App.css';
import Producto from '../src/components/Productos/Producto';
import Navbar from './components/Navbar/Navbar';
import ContainerProductos from '../src/components/ContainerProductos/ContainerProductos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContainerProductos />
      {/* <Producto /> */}
    </div>
  );
}

export default App;
