import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 'p-01', title: 'Product 1' },
  { id: 'p-02', title: 'Product 2' },
  { id: 'p-03', title: 'Product 3' },
];

export default function Products() {
  return (
    <>
      <h1>Products Page</h1>

      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
