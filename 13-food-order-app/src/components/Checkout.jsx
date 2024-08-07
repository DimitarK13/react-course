import { useContext } from 'react';
import Modal from './Modal';
import CartContext from '../store/CartContext';

import formatPrices from '../formatPrices';
import Input from './Input';

export default function Checkout({ isCheckoutOpen, onHideCheckout }) {
  const cartCtx = useContext(CartContext);

  const totalPrice = cartCtx.items.reduce(
    (n, item) => n + item.price * item.quantity,
    0
  );

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    const res = fetch('http://localhost:3000/orders', {
      method: 'POST',
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: data,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <Modal open={isCheckoutOpen}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Your Total: {formatPrices.format(totalPrice)}</p>

        <Input label='Full Name' type='text' id='name' />
        <Input label='Email' type='email' id='email' />
        <Input label='Street' type='text' id='street' />
        <div className='control-row'>
          <Input label='Postal Code' type='text' id='postal-code' />
          <Input label='City' type='text' id='city' />
        </div>

        <p className='modal-actions'>
          <button
            type='button'
            className='text-button'
            onClick={onHideCheckout}>
            Close
          </button>
          <button className='button'>Confirm Order</button>
        </p>
      </form>
    </Modal>
  );
}
