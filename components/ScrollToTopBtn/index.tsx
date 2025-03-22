"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const ScrollToTopBtn: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 780px)" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bg-red-500 h-[50px] w-[50px] border-none rounded-full bottom-8 right-8 text-white cursor-pointer z-20 flex items-center justify-center shadow-lg transition-opacity ${
        visible && isMobile ? "opacity-100" : "opacity-0"
      }`}
      onClick={ScrollToTop}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTopBtn;
