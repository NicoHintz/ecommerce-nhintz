import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import CartContext from './contexts/CartContext';
import Cart from './components/Cart';

import Footer from './components/Footer/Footer';

function App() {
  
  
  return (
    //JSX
    <>
    <div className="App">
      <CartContext>
      
        <BrowserRouter>
          <Navbar/>
          
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"New arrivals"} />}></Route>
            <Route path="/detail" element={<ItemDetail />}></Route>
            <Route path="/category/:name" element={<ItemListContainer />}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </BrowserRouter>
        
      </CartContext>
    </div>
    </>
  );
}

export default App;