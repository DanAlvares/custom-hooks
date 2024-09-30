import { renderHook, act } from '@testing-library/react';
import { vi } from 'vitest';
import useFetch from './useFetch';

describe('useFetch', () => {
  it('should fetch data successfully', async () => {
    const mockData = [{ id: 1, title: 'Test Post' }];
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const { result } = renderHook(() => useFetch('https://api.example.com/posts'));
  
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });

  it('should handle fetch error', async () => {
    const errorMessage = 'Network Error';
    global.fetch = vi.fn().mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useFetch('https://api.example.com/posts'));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe(errorMessage);
  });
});