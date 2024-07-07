import { useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleHideModal() {
    setShowModal(false);
  }

  return (
    <CartContextProvider>
      <Header onShowModal={handleShowModal} />
      <Meals />
      <Cart isOpen={showModal} onHideModal={handleHideModal} />
    </CartContextProvider>
  );
}

export default App;
