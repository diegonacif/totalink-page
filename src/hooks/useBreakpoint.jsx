import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';

export function useBreakpoint() {
  const size = useWindowSize();

  const [currentBreakpoint, setCurrentBreakpoint] = useState('');

  useEffect(() => {
    if (size.width < 425) {
      return setCurrentBreakpoint('mobile')
    } else if (size.width < 768) {
      return setCurrentBreakpoint('tablet')
    } else if (size.width < 1024) {
      return setCurrentBreakpoint('laptop')
    } else if (size.width >= 1024) {
      return setCurrentBreakpoint('desktop')
    } else (setCurrentBreakpoint('loading'))
  }, [size]);

  return currentBreakpoint
}