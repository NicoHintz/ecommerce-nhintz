import React, { useContext, useEffect, useState } from "react";
import { GContext } from "../contexts/CartContext";
import CartItem from "./CartItem";




const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { itemsCarrito, removeItem, clear, sendOrder} = useContext(GContext);
  console.log(itemsCarrito)
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    console.log(inputs[0]);
    const data = Array.from(inputs).map((input, index) => input.value);
    sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2] });
  };
  useEffect(() => {
    let total = 0;
    itemsCarrito.forEach((item) => {
      total += parseInt(item.subtotal);
    });
    setTotalPrice(total);
  }, [itemsCarrito]);
  return (
    <div className="general-container font">
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
          <form onSubmit={handleSubmit}>
            <label className="font">Nombre Completo</label>
            <input type="text" />
            <label className="font">E-mail</label>
            <input type="email" />
            <label className="font">Telefono</label>
            <input type="tel" />
          <button
          // onClick={() => sendOrder(totalPrice)}
          type="submit"
          className="btn btn-info"
        >
          Send order
        </button>
        </form>
        </>
      )}
    </>
    </div>
    );
};
export default Cart;






