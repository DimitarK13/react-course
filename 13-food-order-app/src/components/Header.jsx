import logo from '../assets/logo.jpg';

export default function Header({ itemsInCart = 0 }) {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt='Logo' />
        <h1>TheFoodShop</h1>
      </div>

      <button className='text-button'>Cart ({itemsInCart})</button>
    </header>
  );
}
