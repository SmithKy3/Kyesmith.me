import React, { useEffect, useMemo, useState } from 'react';

const useIsVisible = (ref: React.RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false);
  const interSectionObserver = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting)),
    []
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    interSectionObserver.observe(ref.current);
    return () => {
      interSectionObserver.disconnect();
    };
  }, []);

  return isVisible;
};

export default useIsVisible;
