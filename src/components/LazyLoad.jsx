"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyLoad({ children }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="h-full w-full">{isVisible ? children : null}</div>;
}
