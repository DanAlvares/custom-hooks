import { useEffect } from 'react';

type BeforeUnloadHandler = (event: BeforeUnloadEvent) => void;

function useBeforeUnload(handler: BeforeUnloadHandler) {
  useEffect(() => {
    window.addEventListener('beforeunload', handler);

    return () => {
      window.removeEventListener('beforeunload', handler);
    };
  }, [handler]);
}

export default useBeforeUnload;