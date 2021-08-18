import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") setMode("dark");
    else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
  }, []);

  return [theme, toggleTheme];
};
