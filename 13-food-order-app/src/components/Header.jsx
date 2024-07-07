import { useContext } from 'react';

import logo from '../assets/logo.jpg';
import CartContext from '../store/CartContext';

export default function Header({ onShowCart }) {
  const cartCtx = useContext(CartContext);

  const itemsInCart = cartCtx.items.reduce((n, item) => n + item.quantity, 0);

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt='Logo' />
        <h1>TheFoodShop</h1>
      </div>

      <nav>
        <button className='text-button' onClick={onShowCart}>
          Cart ({itemsInCart})
        </button>
      </nav>
    </header>
  );
}
