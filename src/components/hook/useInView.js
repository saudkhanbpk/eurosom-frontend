import { useState, useEffect } from 'react';

const useInView = (threshold = 0.1) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animatedElement');
      if (element) {
        const rect = element.getBoundingClientRect();
        setInView(rect.top < window.innerHeight * threshold);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return inView;
};

export default useInView;
