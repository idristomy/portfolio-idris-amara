"use client"

import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const CursorBlur: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        left: `${position.x - 50}px`, // center the div
        top: `${position.y - 50}px`,
      }}
      className="pointer-events-none fixed w-32 h-32 bg-purple-500/30 rounded-full blur-3xl transition-transform duration-100"
    />
  );
};

export default CursorBlur;
