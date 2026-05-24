"use client"

import { useEffect, useRef } from "react";

const CursorBlur: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX - 64}px`;
        ref.current.style.top = `${e.clientY - 64}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed w-32 h-32 bg-purple-500/30 rounded-full blur-3xl"
      style={{ left: "-200px", top: "-200px" }}
    />
  );
};

export default CursorBlur;
