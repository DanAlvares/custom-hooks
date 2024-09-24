import { fireEvent, renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import useClickOutside from './useClickOutside';

describe('useClickOutside', () => {
  it('should call the callback when clicked outside', () => {
    const ref = { current: document.createElement('div') };
    const callback = vi.fn();

    renderHook(() => useClickOutside(ref, callback));

    fireEvent.mouseDown(document);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback when clicked inside', () => {
    const ref = { current: document.createElement('div') };
    const callback = vi.fn();

    renderHook(() => useClickOutside(ref, callback));

    fireEvent.mouseDown(ref.current);
    expect(callback).not.toHaveBeenCalled();
  });
});
