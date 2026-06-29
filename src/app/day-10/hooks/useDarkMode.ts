import { useCallback, useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("Dark");
    } else {
      root.classList.remove("Dark");
    }
  }, [isDark]);

  const toggleMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return [isDark, toggleMode] as const;
};
