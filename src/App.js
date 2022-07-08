import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const title = "Mi Tienda"

  return (
    <>
      <Navbar titulo = {title}/>
      <ItemListContainer greeting = {"New arrivals"} />
    </>
  );
}

export default App;