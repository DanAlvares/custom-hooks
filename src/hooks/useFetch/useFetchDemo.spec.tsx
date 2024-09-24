import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import UseFetchDemo from './useFetchDemo';
import * as useFetchModule from './useFetch';

// Mock the useFetch hook
vi.mock('./useFetch');

describe('UseFetchDemo', () => {
  const mockUseFetch = vi.mocked(useFetchModule.default);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render loading state', () => {
    mockUseFetch.mockReturnValue({ data: null, loading: true, error: null });

    render(<UseFetchDemo />);

    expect(screen.getByText('Loading...')).toBeDefined();
  });

  it('should render error state', () => {
    const errorMessage = 'Failed to fetch';
    mockUseFetch.mockReturnValue({ data: null, loading: false, error: new Error(errorMessage) });

    render(<UseFetchDemo />);

    expect(screen.getByText(`Error: ${errorMessage}`)).toBeDefined();
  });

  it('should render data', async () => {
    const mockData = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' },
      { id: 4, title: 'Post 4' },
      { id: 5, title: 'Post 5' },
    ];
    mockUseFetch.mockReturnValue({ data: mockData, loading: false, error: null });

    render(<UseFetchDemo />);

    await waitFor(() => {
      expect(screen.getByText('Fetch Demo')).toBeDefined();
      mockData.forEach((post) => {
        expect(screen.getByText(post.title)).toBeDefined();
      });
    });
  });

  it('should call useFetch with correct URL', () => {
    mockUseFetch.mockReturnValue({ data: null, loading: true, error: null });

    render(<UseFetchDemo />);

    expect(mockUseFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
  });
});
