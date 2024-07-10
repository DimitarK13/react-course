import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>My homepage</h1>
      <p>
        <Link to='/products'>All Products</Link>
      </p>
    </>
  );
}
