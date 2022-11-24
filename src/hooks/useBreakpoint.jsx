import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';

export function useBreakpoint() {
  const size = useWindowSize();

  const [currentBreakpoint, setCurrentBreakpoint] = useState('');

  console.log(size);

  useEffect(() => {
    
    if (size.width >= 320 && size.width < 600) {
      return setCurrentBreakpoint('mobile')
    } else if (size.width >= 600 && size.width < 1024) {
      return setCurrentBreakpoint('tablet')
    } else if (size.width >= 1024 && size.width < 1280) {
      return setCurrentBreakpoint('notebook')
    } else if (size.width >= 1280) {
      return setCurrentBreakpoint('desktop')
    }
  }, [size]);

  return currentBreakpoint
}