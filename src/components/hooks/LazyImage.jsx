import React from "react";
import { useInView } from "react-intersection-observer";

const LazyImage = ({ src, alt, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView && <img src={src} alt={alt} className={className} />}
    </div>
  );
};

export default LazyImage;
