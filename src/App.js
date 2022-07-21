import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App() {
  const title = "Cafe";

  return (
    <>
      <BrowserRouter>
      <Navbar titulo={title} />
          <Link to={"category/suave"}></Link>
          <h1 style={{ textAlign: "center" }} >Gusto Cafe</h1>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"New arrivals"} />}></Route>
          <Route path="/detail" element={<ItemDetail />}></Route>
          <Route path="/category/:name" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        </Routes>

        {/* <ItemListContainer greeting = {"New arrivals"} /> */}
        {/* <ItemDetailContainer  /> */}

      </BrowserRouter>
    </>
  );
}

export default App;