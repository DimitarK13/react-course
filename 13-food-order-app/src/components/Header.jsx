import logo from '../assets/logo.jpg';

export default function Header({ itemsInCart = 0 }) {
  return (
    <div id='main-header'>
      <div id='title'>
        <img src={logo} alt='Logo' />
        <h1>ReactFood</h1>
      </div>

      <button className='text-button'>Cart ({itemsInCart})</button>
    </div>
  );
}
