import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'



function App() {
  const title = "Cafe";

  return (
    <>
      
      <Navbar titulo = {title}/>
      {/* <Link to={"category/fuerte"}></Link> */}
        
      <h1 style={{ textAlign: "center" }} >Gusto Cafe</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"New arrivals"} />}></Route>
          <Route path="/detail" element={<ItemDetail/>}></Route>
          <Route path="/category/:name" element={<ItemDetail/>}></Route>
        </Routes>
        
        {/* <ItemListContainer greeting = {"New arrivals"} /> */}
        {/* <ItemDetailContainer  /> */}

      </BrowserRouter>
    </>
  );
}

export default App;