import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Context/CartContext';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (

    <BrowserRouter>
      <CartProvider>
        <Navbar />

      </CartProvider>
    </BrowserRouter>

  );
}

export default App;
