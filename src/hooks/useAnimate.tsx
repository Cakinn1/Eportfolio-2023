import { useState, useEffect, useRef } from "react";

function useAnimate() {
  const [inViewPort, setInViewPort] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInViewPort(true);
          if (!animationPlayed) {
            setAnimationPlayed(true);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, animationPlayed]);

  return { inViewPort, ref, animationPlayed };
}

export default useAnimate;
