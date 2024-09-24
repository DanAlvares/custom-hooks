import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import LocalStorageDemo from './useLocalStorageDemo';

describe('LocalStorageDemo', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the component and updates localStorage', () => {
    render(<LocalStorageDemo />);

    const nameInput = screen.getByLabelText('Name:') as HTMLInputElement;
    const ageInput = screen.getByLabelText('Age:') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(ageInput, { target: { value: '30' } });

    expect(nameInput.value).toBe('John Doe');
    expect(ageInput.value).toBe('30');

    expect(localStorage.getItem('name')).toBe(JSON.stringify('John Doe'));
    expect(localStorage.getItem('age')).toBe(JSON.stringify(30));

    expect(screen.getByText('Stored Name: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Stored Age: 30')).toBeInTheDocument();
  });

  it('loads the stored values from localStorage', () => {
    localStorage.setItem('name', JSON.stringify('Jane Doe'));
    localStorage.setItem('age', JSON.stringify(25));

    render(<LocalStorageDemo />);

    const nameInput = screen.getByLabelText('Name:') as HTMLInputElement;
    const ageInput = screen.getByLabelText('Age:') as HTMLInputElement;

    expect(nameInput.value).toBe('Jane Doe');
    expect(ageInput.value).toBe('25');

    expect(screen.getByText('Stored Name: Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Stored Age: 25')).toBeInTheDocument();
  });
});
