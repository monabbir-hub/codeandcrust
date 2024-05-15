import { useEffect, useState } from 'react';

const useScrollSpy = (sectionIds, offset = 0) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: `-${offset}px 0px 0px 0px`,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
