import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders header, main, footer and booking form', () => {
    render(<App />);
    
    // Check for Header
    expect(screen.getByText(/Little Lemon/i)).toBeInTheDocument();
    
    // Check for Main
    expect(screen.getByText(/We are a family owned Mediterranean restaurant/i)).toBeInTheDocument();
    
    // Check for Footer
    expect(screen.getByText(/© 2023 Little Lemon. All rights reserved./i)).toBeInTheDocument();
    
    // Navigate to Booking Form
    const reserveButton = screen.getByText(/Reserve a Table/i);
    fireEvent.click(reserveButton);
    
    // Check for Booking Form elements
    expect(screen.getByText(/Book a Table/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion:/i)).toBeInTheDocument();
  });
});