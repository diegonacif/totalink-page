import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';

export function useBreakpoint() {
  const size = useWindowSize();

  const [currentBreakpoint, setCurrentBreakpoint] = useState('');

  console.log(size);

  useEffect(() => {
    
    if (size.width < 480) {
      return setCurrentBreakpoint('mobile')
    } else if (size.width < 1024) {
      return setCurrentBreakpoint('tablet')
    } else if (size.width < 2560) {
      return setCurrentBreakpoint('notebook')
    } else {
      return setCurrentBreakpoint('desktop')
    }
  }, [size]);

  return currentBreakpoint
}