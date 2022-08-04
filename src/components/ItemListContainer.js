import { Grid } from '@mui/material';
import { useEffect, useState } from "react";
// import productos from '../utils/productsMock'
import Container from '@mui/material/Container';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Spinner from "./Spinner";


const ItemListContainer = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollection = collection(db, "products");
    getDocs(itemsCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      if (name) {
        setProducts(data.filter(productos => productos.category.toLowerCase() === name));
      } else {
        setProducts(data);
        setLoading(false);
      }
    });
  }, [name]);

  // if (loading) {
  //   return <Spinner />;
  // }
  return (
    <>
      <div className="general-container">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <ItemList products={products} />
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ItemListContainer;
//   const getProducts = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(productos)
//       }, 2000)
//     })
//   }

//   useEffect(() => {

//
//     getProducts()
//       .then((response) => {
//         if (name) {
//           setProducts(response.filter(productos => productos.category.toLowerCase() === name));

//         } else {
//           setProducts(response)
//         }


//       })
//       .catch((err) => {
//       })
//       .finally(() => {
//       })
//   }, [name])

//   return (
//     <div className="general-container">
//       <Container maxWidth="lg">
//         <Grid container spacing={5}>
//           <ItemList products={products} />
//         </Grid>
//       </Container>
//     </div>
//   )

// }

// export default ItemListContainer