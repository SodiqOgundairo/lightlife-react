import { useEffect } from "react";

const TapGlow = () => {
  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      const glow = document.createElement("div");

      glow.className =
        "fixed w-16 h-16 bg-darkPurple/80 rounded-full blur-xl opacity-100 animate-ping pointer-events-none";
      glow.style.top = `${touch.clientY - 32}px`;
      glow.style.left = `${touch.clientX - 32}px`;
      glow.style.zIndex = "9999";

      document.body.appendChild(glow);
      setTimeout(() => {
        document.body.removeChild(glow);
      }, 600);
    };

    window.addEventListener("touchstart", handleTouch);
    return () => window.removeEventListener("touchstart", handleTouch);
  }, []);

  return null;
};

export default TapGlow;
