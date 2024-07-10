import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';
import Error from './pages/Error';
import Product from './pages/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <Product /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
