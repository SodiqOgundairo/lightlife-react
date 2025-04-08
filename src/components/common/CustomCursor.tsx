// This is me just paying around with the cursor

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="hidden md:block fixed z-[9999] pointer-events-none transition-transform duration-75 ease-linear"
      style={{
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-10 h-10 bg-purple-mid/40 rounded-full backdrop-blur-md blur-md animate-pulse" />
    </div>
  );
};

export default CustomCursor;
