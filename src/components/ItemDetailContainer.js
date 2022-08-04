import { useEffect, useState,} from "react";
// import productsMock from '../utils/productsMock'
// import Container from '@mui/material/Container';
// import ItemList from './ItemList';
import ItemDetail from './Item/ItemDetail';
import { useParams } from 'react-router-dom';
import Spinner from "./Spinner";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

  const {id} = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemDoc = doc(db, "products", id);
    getDoc(itemDoc).then((snapshot) => {
      setItem({ ...snapshot.data(), id: snapshot.id });
      setLoading(false);
      console.log(snapshot.data(), id);
    });
  }, [id]);
  
  // const getItem = useCallback(() => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(productsMock.filter(producto => producto.id === parseInt(id)));
  //     }, 2000)
  //   })
  // }, [id]);

  // useEffect(() => {
  //   setLoading(true);
  //   getItem()
  //     .then((response) => {
  //       setItem(response[0]);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //     })
  //     .finally(() => {
  //     })
  // }, [getItem, id])

  return (
    // <div className="general-container">
    //   <Container maxWidth="lg">
    //     <ItemDetail key={item.id} item={item} />
    //   </Container>
    // </div>
    loading ? <Spinner /> : <ItemDetail key={item.id} item={item} />
  )
  
};

export default ItemDetailContainer;
