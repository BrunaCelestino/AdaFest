import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      const media = window.matchMedia('(min-width: 768px)');
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => {
        setMatches(media.matches);
      };
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches]);
  return matches;
}
