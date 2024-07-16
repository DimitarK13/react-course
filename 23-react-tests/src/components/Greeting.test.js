import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    render(<Greeting />);

    const helloWorldEl = screen.getByText('Hello World', { exact: false });
    expect(helloWorldEl).toBeInTheDocument();
  });

  test('renders initial text if the button was NOT clicked', () => {
    render(<Greeting />);

    const initialText = screen.getByText("It's good to see u", {
      exact: false,
    });
    expect(initialText).toBeInTheDocument();
  });

  test('renders changed text if the button was clicked', () => {
    render(<Greeting />);

    const buttonEl = screen.getByRole('button');
    userEvent.click(buttonEl);

    const changedText = screen.getByText('changed!', {
      exact: false,
    });
    expect(changedText).toBeInTheDocument();
  });

  test('does not render initial text if the button was clicked', () => {
    render(<Greeting />);

    const buttonEl = screen.getByRole('button');
    userEvent.click(buttonEl);

    const initialText = screen.queryByText("It's good to see u", {
      exact: false,
    });
    expect(initialText).toBeNull();
  });
});
