import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import DisableElevation from './components/ItemCount';



function App() {
  const title = "Mi Tienda";
  
  return (
    <>
      <Navbar titulo = {title}/>
      <ItemListContainer greeting = {"New arrivals"} />
      <h1 style={{textAlign:"center"}} >Counter</h1>
      <DisableElevation/>
    </>
  );
}

export default App;