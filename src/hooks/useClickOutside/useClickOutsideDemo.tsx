import React, { useRef, useState } from 'react';
import useClickOutside from './useClickOutside';

const ClickOutsideDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      {isOpen && (
        <div ref={ref} style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
          This is the dropdown content. Click outside to close.
        </div>
      )}
    </div>
  );
};

export default ClickOutsideDemo;
