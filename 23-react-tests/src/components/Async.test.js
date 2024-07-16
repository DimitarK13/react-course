import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    render(<Async />);

    const listItemEls = await screen.findAllByRole('listitem');
    expect(listItemEls).not.toHaveLength(0);
  });
});
