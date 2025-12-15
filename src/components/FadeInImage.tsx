import { useEffect, useRef, useState } from 'react';

interface FadeInImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export function FadeInImage({ src, alt = '', className = '' }: FadeInImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-in-out',
      }}
    />
  );
}
