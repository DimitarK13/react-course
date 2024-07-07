import { useContext, useState } from 'react';
import Modal from './Modal';
import CartContext from '../store/CartContext';
import formatPrices from '../formatPrices';

export default function Cart({ isOpen, onHideModal }) {
  const cartCtx = useContext(CartContext);

  const totalPrice = cartCtx.items.reduce(
    (n, item) => n + item.price * item.quantity,
    0
  );

  return (
    <Modal className='cart' open={isOpen}>
      <h2>Your Order</h2>

      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className='cart-total'>{formatPrices.format(totalPrice)}</p>
      <p className='modal-actions'>
        <button className='text-only' onClick={onHideModal}>
          Close
        </button>
        <button className='button' onClick={onHideModal}>
          Checkout
        </button>
      </p>
    </Modal>
  );
}
