import { useEffect, useState,} from "react";
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
  
  

  return (
    
    loading ? <Spinner /> : <ItemDetail key={item.id} item={item} />
  )
  
};

export default ItemDetailContainer;
