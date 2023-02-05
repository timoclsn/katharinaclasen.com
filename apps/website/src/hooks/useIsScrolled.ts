import { useState, useEffect } from "react";

export const useIsScrolled = (threshold: number = 0) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolled && window.scrollY > threshold) {
        setIsScrolled(true);
      }
      if (isScrolled && window.scrollY <= threshold) {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled, threshold]);

  return isScrolled;
};
