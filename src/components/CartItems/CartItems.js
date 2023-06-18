/* import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogTitle } from '@mui/material';

const CartItems = ({ openDialog, handleCancelEdit, setCartItems, handleRemoveFromCart}) => {
    const cartItems = useSelector((state) => state.cartItems);

  return (
    <div>
      <h1>Кошик</h1>
     
        
        <div>
        <ul>
  {cartItems.map((item) => (
    <li key={item.id}>
      <span>{item.item}</span>
      <span>{item.description}</span>
      <img src={item.image} alt="" />
      <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
    </li>
  ))}
</ul>
        </div>
  
    </div>
  );
};

export default CartItems;
 */