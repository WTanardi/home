import React, { useRef, useEffect, useState } from "react";

export const useIntersectionObserver = (refs: any, options: any) => {
  const [intersecting, setIntersecting] = useState(
    Array(refs.length).fill(false)
  );

  useEffect(() => {
    const observers = refs.map((ref: any, index: number) => {
      return new IntersectionObserver((entries) => {
        const newIntersecting = [...intersecting];
        entries.forEach((entry) => {
          if (entry.target === ref.current && entry.isIntersecting) {
            newIntersecting[index] = true;
          }
        });
        setIntersecting(newIntersecting);
      }, options);
    });

    refs.forEach((ref: any, index: number) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref: any, index: number) => {
        if (ref.current) {
          observers[index].unobserve(ref.current);
        }
      });
    };
  }, [refs, options, intersecting]);

  return intersecting;
};
