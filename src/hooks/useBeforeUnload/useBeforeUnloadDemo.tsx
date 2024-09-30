import React, { useState } from 'react';
import useBeforeUnload from './useBeforeUnload';

const UseBeforeUnloadDemo: React.FC = () => {
  const [isDirty, setIsDirty] = useState(false);

  useBeforeUnload((event) => {
    if (isDirty) {
      event.preventDefault();
      event.returnValue = '';
    }
  });

  return (
    <div>
      <p>Form is {isDirty ? 'dirty' : 'clean'}</p>
      <button onClick={() => setIsDirty(!isDirty)}>Toggle Form State</button>
      <p>{isDirty ? "Try to close the tab or refresh the page. You'll see a warning." : 'You can freely close the tab or refresh the page.'}</p>
    </div>
  );
};

export default UseBeforeUnloadDemo;
