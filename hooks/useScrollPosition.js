import { useEffect, useState } from "react";

const useScrollPosition = (disable) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return disable ? 0 : scrollPosition;
};

export default useScrollPosition;
