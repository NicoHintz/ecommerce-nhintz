import React, { useContext, useEffect, useState } from "react";
import { GContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { itemsCarrito, removeItem, clear, total} = useContext(GContext);
  useEffect(() => {
    let total = 0;
    itemsCarrito.forEach((item) => {
      total += parseInt(item.price);
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
            <CartItem item={element.item} quantity={element.quantity} removeItem={removeItem} />
          ))}
          <button className="bg-red-500 p-2 " onClick={() => clear()}>
            Vaciar carrito
          </button>
          <h1>El total de la compra es de : {totalPrice}</h1>
        </>
      )}
    </>


    // <>
    //   <ul>
    //     {itemsCarrito.map((item) => (
    //       <>
    //         <li>{item.title}</li>
    //         <li>Tipo de Café: {item.category}</li>
    //         <li>Precio por unidad ${item.price}</li>
    //       </>
    //     ))}
    //   </ul>
    //   <h1 className="bg-secondary">{`Total a pagar: $${totalPrice}`}</h1>
    // </>
  );
};

export default Cart;