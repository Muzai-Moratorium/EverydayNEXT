"use client";

import { useDarkMode } from "@/app/day-10/hooks/useDarkMode";
import Nav from "./components/nav/nav";
import styles from "./header.module.css";

const Header = () => {
  const [isDark, toggleMode] = useDarkMode();
  return (
    <header className={styles.mainHeader}>
      <h1>{isDark ? "라이트모드" : "다크모드"}</h1>
      <Nav />
      <button className={styles.themeButton} type="button" onClick={toggleMode}>
        {isDark ? "Light" : "Dark"}
      </button>
    </header>
  );
};
export default Header;
