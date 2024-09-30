import { render, fireEvent, screen, act } from '@testing-library/react';
import { vi } from 'vitest';
import UseDebounceDemo from './useDebounceDemo';

describe('UseDebounceDemo', () => {
  it('renders the component and updates input value immediately', () => {
    render(<UseDebounceDemo />);
    const input = screen.getByPlaceholderText('Type something...');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(screen.getByText('Input value: test')).toBeInTheDocument();
    expect(screen.getByText('Debounced value:')).toBeInTheDocument();
    expect(screen.getByText('Debounced value changed: 1 times')).toBeInTheDocument();
  });

  it('updates debounced value after delay', async () => {
    vi.useFakeTimers();
    render(<UseDebounceDemo />);
    const input = screen.getByPlaceholderText('Type something...');

    fireEvent.change(input, { target: { value: 'test' } });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(screen.getByText('Debounced value: test')).toBeInTheDocument();
    expect(screen.getByText('Debounced value changed: 2 times')).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('does not update debounced value if input changes rapidly', () => {
    vi.useFakeTimers();
    render(<UseDebounceDemo />);
    const input = screen.getByPlaceholderText('Type something...');

    fireEvent.change(input, { target: { value: 'test1' } });

    act(() => {
      vi.advanceTimersByTime(250);
    });

    fireEvent.change(input, { target: { value: 'test2' } });

    act(() => {
      vi.advanceTimersByTime(250);
    });

    expect(screen.getByText('Input value: test2')).toBeInTheDocument();
    expect(screen.getByText('Debounced value:')).toBeInTheDocument();
    expect(screen.getByText('Debounced value changed: 1 times')).toBeInTheDocument();

    vi.useRealTimers();
  });
});
