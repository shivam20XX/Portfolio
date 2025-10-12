import React from "react";
import { useEffect, useState } from "react";

function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };


    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll);
    document.addEventListener("scroll", throttledScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      document.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 bg-gray-800 z-[9999]">
      <div
        className="h-full bg-pink-400 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default ProgressBar;
