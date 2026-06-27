"use client";
import { useDarkMode } from "./hooks/useDarkMode";
import { useKeyPress } from "./hooks/useKeyPress";
import styles from "./page.module.scss";

const Day9 = () => {
  const [isDark, toggleDarkMode] = useDarkMode();

  useKeyPress("Enter", toggleDarkMode);

  return (
    <main className={styles.mainContainer}>
      <h1>{isDark ? "라이트모드" : "다크모드"}</h1>
      <button type="button" onClick={toggleDarkMode}>
        키보드 엔터를 눌러주세요
      </button>
    </main>
  );
};
export default Day9;
