import React from "react";

const CartItem = ({ item, quantity, removeItem }) => {
  return (
    <div className="flex">
      <h2>Producto: {item.title} - Cantidad {quantity}</h2> <p>Cantidad: {item.amount}</p>
      <button className="bg-red-400 rounded-lg p-2" onClick={() => removeItem(item.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;