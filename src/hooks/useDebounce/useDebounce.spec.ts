import { act, renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import useDebounce from './useDebounce';

describe('useDebounce', () => {
  it('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));
    expect(result.current).toBe('initial');
  });

  it('should debounce the value after the specified delay', async () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), { initialProps: { value: 'initial', delay: 500 } });

    expect(result.current).toBe('initial');

    act(() => {
      rerender({ value: 'updated', delay: 500 });
    });

    expect(result.current).toBe('initial');

    act(() => {
      vi.advanceTimersByTime(250);
    });

    expect(result.current).toBe('initial');

    act(() => {
      vi.advanceTimersByTime(250);
    });

    expect(result.current).toBe('updated');

    vi.useRealTimers();
  });

  it('should cancel the previous timer when the value changes rapidly', () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), { initialProps: { value: 'initial', delay: 500 } });

    act(() => {
      rerender({ value: 'intermediate', delay: 500 });
    });

    act(() => {
      vi.advanceTimersByTime(250);
    });

    act(() => {
      rerender({ value: 'final', delay: 500 });
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('final');

    vi.useRealTimers();
  });
});
