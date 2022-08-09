import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CartContext from './contexts/CartContext';
import Cart from './components/Cart';



function App() {

  const title = "Cafe";

  return (
    //JSX
    <>
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <Navbar titulo={title} />
          <Link to={"category/suave"}></Link>
          <h1 style={{ textAlign: "center" }} >Gusto Cafe</h1>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"New arrivals"} />}></Route>
            <Route path="/detail" element={<ItemDetail />}></Route>
            <Route path="/category/:name" element={<ItemListContainer />}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
          {/* <ItemListContainer greeting = {"New arrivals"} /> */}
          {/* <ItemDetailContainer  /> */}
        </BrowserRouter>
      </CartContext>
      </div>
    </>
  );
}

export default App;