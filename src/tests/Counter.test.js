import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter'

beforeEach(() => {
  render(<Counter/>)
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const updated = Number(screen.getByTestId('count').textContent) + 1;
  fireEvent.click(screen.getByText('+'));
  expect(Number(screen.getByTestId('count').textContent)).toEqual(updated);
});

test('clicking - decrements the count', () => {
  const updated = Number(screen.getByTestId('count').textContent) - 1;
  fireEvent.click(screen.getByText('-'));
  expect(Number(screen.getByTestId('count').textContent)).toEqual(updated);
});
