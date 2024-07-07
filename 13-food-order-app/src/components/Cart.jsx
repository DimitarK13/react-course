import { useContext } from 'react';
import Modal from './Modal';
import CartContext from '../store/CartContext';
import formatPrices from '../formatPrices';

export default function Cart({ isCartOpen, onHideCart, onShowCheckout }) {
  const cartCtx = useContext(CartContext);

  const totalPrice = cartCtx.items.reduce(
    (n, item) => n + item.price * item.quantity,
    0
  );

  function handleAddMeal(meal) {
    cartCtx.addItem(meal);
  }

  function handleRemoveMeal(id) {
    cartCtx.removeItem(id);
  }

  return (
    <Modal className='cart' open={isCartOpen}>
      <h2>Your Order</h2>

      <ul>
        {cartCtx.items.map((item) => (
          <li className='cart-item' key={item.id}>
            <p>
              {item.name} - {item.quantity} {formatPrices.format(item.price)}
            </p>
            <p className='cart-item-actions'>
              <button onClick={() => handleRemoveMeal(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleAddMeal(item)}>+</button>
            </p>
          </li>
        ))}
      </ul>
      <p className='cart-total'>{formatPrices.format(totalPrice)}</p>
      <p className='modal-actions'>
        <button className='text-button' onClick={onHideCart}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button
            className='button'
            onClick={() => {
              onShowCheckout();
              onHideCart();
            }}>
            Checkout
          </button>
        )}
      </p>
    </Modal>
  );
}
