import { render, screen } from '@testing-library/react';
import App, { Navbar } from './App';
import Welcome from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render welcom to reactjs', () => {
  render(<Welcome />);
  const welcomeText = screen.getByText(/Welcome to reactjs/i);
  expect(welcomeText).toBeInTheDocument();
});

test('render navbar', () => {
  render(<Navbar />);
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
}); 

