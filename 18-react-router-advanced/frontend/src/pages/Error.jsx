import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';

export default function Error() {
  const error = useRouteError();

  let title = 'An Error Occurred...';
  let message = 'Something went wrong!';

  if (error.status === 500) message = error.data.message;

  if (error.status === 404) {
    title = 'Page Not Found...';
    message = `The page you are looking for doesn't exist!`;
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}
