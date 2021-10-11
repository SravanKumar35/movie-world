import { useCallback, useEffect, useState } from "react";

// Use to check if the device is mobile or desktop based on width

export const Mobile = () => {
  const [width, setWidth] = useState();

  const handleWindowSizeChange = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 768;
};
