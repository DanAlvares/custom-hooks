import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import useBeforeUnload from './useBeforeUnload';
import UseBeforeUnloadDemo from './useBeforeUnloadDemo';

describe('useBeforeUnload', () => {
  it('should call the handler before unloading the page', () => {
    // Arrange - render component
    render(<UseBeforeUnloadDemo />);
    // Act - Click button to dirty the form and close tab
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    // Assert - popup is showing
    window.dispatchEvent(new Event('beforeunload'));
    expect(screen.getByText('Form is dirty')).toBeInTheDocument();
  });
});
