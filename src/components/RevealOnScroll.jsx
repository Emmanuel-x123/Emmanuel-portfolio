import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("reveal-visible");
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="
        reveal-base 
        opacity-0 translate-y-8 
        transform-gpu will-change-transform will-change-opacity
      "
    >
      {children}
    </div>
  );
};
