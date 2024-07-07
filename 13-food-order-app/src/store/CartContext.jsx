import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (itemId) => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];

    const hasItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (hasItemIndex > -1) {
      const updatedItem = {
        ...state.items[hasItemIndex],
        quantity: state.items[hasItemIndex].quantity + 1,
      };

      updatedItems[hasItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    const updatedItems = [...state.items];

    const hasItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[hasItemIndex];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(hasItemIndex, 1);
    } else {
      const updatedItem = {
        existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItem[hasItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }

  function removeItem(itemId) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: itemId });
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
