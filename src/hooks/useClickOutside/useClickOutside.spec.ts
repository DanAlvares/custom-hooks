
import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import useClickOutside from './useClickOutside';

describe('useClickOutside', () => {
  let mockRef: { current: HTMLElement | null };
  let mockCallback: jest.Mock;

  beforeEach(() => {
    mockRef = { current: document.createElement('div') };
    mockCallback = vi.fn() as unknown as jest.Mock;
  });

  it('should add event listener on mount', () => {
    const addEventListenerSpy = vi.spyOn(document, 'addEventListener');
    renderHook(() => useClickOutside(mockRef, mockCallback));
    expect(addEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));
  });

  it('should remove event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');
    const { unmount } = renderHook(() => useClickOutside(mockRef, mockCallback));
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));
  });

  it('should call callback when clicked outside', () => {
    renderHook(() => useClickOutside(mockRef, mockCallback));
    const event = new MouseEvent('mousedown');
    document.dispatchEvent(event);
    expect(mockCallback).toHaveBeenCalledWith(event);
  });

  it('should not call callback when clicked inside', () => {
    renderHook(() => useClickOutside(mockRef, mockCallback));
    const event = new MouseEvent('mousedown');
    mockRef.current?.dispatchEvent(event);
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('should not call callback when ref is null', () => {
    mockRef.current = null;
    renderHook(() => useClickOutside(mockRef, mockCallback));
    const event = new MouseEvent('mousedown');
    document.dispatchEvent(event);
    expect(mockCallback).not.toHaveBeenCalled();
  });
});
