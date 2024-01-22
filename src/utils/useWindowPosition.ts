import { useState, useEffect } from "react";

const useWindowPosition = () => {
  const [windowPosition, setWindowPosition] = useState(0);

  const handleScroll = () => {
    setWindowPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return windowPosition;
};

export default useWindowPosition;
