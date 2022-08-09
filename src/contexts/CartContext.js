import { createContext, useState } from "react";
import {addDoc, collection, getFirestore,  } from "firebase/firestore";
export const GContext = createContext();

const CartContext = ({ children }) => {
  const [itemsCarrito, setItemCarrito] = useState([]);
  const [countItems, setCountItems] = useState([]);

  const sendOrder = async (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: itemsCarrito,
      total: totalPrice,
      buyer: buyerData,
    };
    addDoc(orderCollection, order)
    .then((res) => console.log(res.id))
    .catch((err) => console.log("error", err));
  };
    

  const addItem = (item, quantity) => {
    setItemCarrito(prevState=> [...prevState, item])
    setCountItems(countItems + quantity);
  };

  const isInCart = (item) => {
    return itemsCarrito.find((element) => element.item === item);
  };

  const clear = () => {
    setItemCarrito([]);
    setCountItems(0)
  };
  const removeItem = (itemId) => {
    setItemCarrito(itemsCarrito.filter((element) => element.id !== itemId));
  };

  return <GContext.Provider value={{ itemsCarrito, countItems, addItem, removeItem, clear, isInCart, setItemCarrito, sendOrder }}>{children}</GContext.Provider>;
};

export default CartContext;



  
//   const addItem = (item, quantity) => {
//     const newItem = isInCart(item);
//     if (newItem) {
//       quantity = quantity + newItem.quantity;
//       setItemCarrito(
//         itemsCarrito.splice(
//           itemsCarrito.findIndex((item) => item.item.id === item.id),
//           1
//         )
//       );
//     }
//     setItemCarrito([...itemsCarrito, { item, quantity }]);
//   };

//   const isInCart = (item) => {
//     return itemsCarrito.find((item) => item.item === item);
//   };

//   const clear = () => {
//     setItemCarrito([]);
//   };
//   const removeItem = (itemId) => {
//     setItemCarrito(itemsCarrito.filter((item) => item.item.id !== itemId));
//   };

//   const total = () => {
//     return itemsCarrito.reduce(
//       (valorAnterior, valorActual) => valorAnterior + valorActual.item.price * valorActual.quantity,
//       0
//     );
//   };
//   return <GContext.Provider value={{ itemsCarrito, addItem, removeItem, clear, total }}>{children}</GContext.Provider>;
// };

// export default CartContext;