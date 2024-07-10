import { useParams } from 'react-router-dom';

export default function Product() {
  const params = useParams();

  return (
    <>
      <h1>Single product</h1>
      <p>{params.id}</p>
    </>
  );
}
