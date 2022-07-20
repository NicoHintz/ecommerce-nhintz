import Navbar from './components/Navbar';
import './App.css';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  const title = "Mi Tienda";
  
  return (
    <>
      <Navbar titulo = {title}/>
      <h1 style={{textAlign:"center"}} >Gusto Cafe</h1>
      {/* <ItemListContainer greeting = {"New arrivals"} /> */}
      <ItemDetailContainer  />
      
    </>
  );
}

export default App;