import React, { useContext, useEffect, useState } from "react";
import { GContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { itemsCarrito, removeItem, clear} = useContext(GContext);
  console.log(itemsCarrito)
  useEffect(() => {
    let total = 0;
    itemsCarrito.forEach((item) => {
      total += parseInt(item.subtotal);
    });
    setTotalPrice(total);
  }, [itemsCarrito]);
  return (
    <>
      {itemsCarrito.length === 0 ? (
        <>
          No hay items! Agrega algunos
          
        </>
      ) : (
        <>
          {itemsCarrito.map((element) => (
            <CartItem key={element.id} item={element} quantity={element.quantity} removeItem={removeItem} />
          ))}
          <button className="bg-red-500 p-2 " onClick={() => clear()}>
            Vaciar carrito
          </button>
          <h1>El total de la compra es de : ${totalPrice}</h1>
        </>
      )}
    </>
    );
};
export default Cart;



// import React, { useContext, useEffect, useState } from "react";
// import { GContext } from "../contexts/CartContext";
// import CartItem from "./CartItem";

// const Cart = () => {
//   const [totalPrice, setTotalPrice] = useState(0);
//   const { itemsCarrito, removeItem, clear, total } = useContext(GContext);

//   useEffect(() => {
//     setTotalPrice(total()); 
//   }
//     , [itemsCarrito, total]);
//   return (
    
//     <>
//       {itemsCarrito.length === 0 ? (
//         <>
//           No hay items! Agrega algunos
//         </>
//       ) : (
//         <>
//           {itemsCarrito.map((element) => (
//             <CartItem item={element.item} quantity={element.quantity} removeItem={removeItem} />
//           ))}
//           <button className="bg-red-500 p-2 " onClick={() => clear()}>
//             Vaciar carrito
//           </button>
//           <h1>El total de la compra es de : ${totalPrice}</h1>
//         </>
//       )}

//     </>
//   )
// }
// export default Cart;



