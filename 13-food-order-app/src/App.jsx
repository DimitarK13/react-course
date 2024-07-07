import { useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';
import Checkout from './components/Checkout';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  function handleShowCart() {
    setShowCart(true);
  }

  function handleHideCart() {
    setShowCart(false);
  }

  function handleShowCheckout() {
    setShowCheckout(true);
  }

  function handleHideCheckout() {
    setShowCheckout(false);
  }

  return (
    <CartContextProvider>
      <Header onShowCart={handleShowCart} />
      <Meals />
      <Cart
        isCartOpen={showCart}
        onHideCart={handleHideCart}
        onShowCheckout={handleShowCheckout}
      />
      <Checkout
        isCheckoutOpen={showCheckout}
        onHideCheckout={handleHideCheckout}
      />
    </CartContextProvider>
  );
}

export default App;
