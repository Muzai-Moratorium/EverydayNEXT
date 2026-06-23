"use client";
import { GiAbstract007, GiAbstract008 } from "react-icons/gi";
import { useDarkMode } from "@/app/day-6/hooks/useDarkMode";
import styles from "./headerDarkBtn.module.scss";

const HeaderDarkModeBtn = () => {
  const [isDark, toggleDarkMode, isMounted] = useDarkMode();
  if (!isMounted) return <div className="loading">로딩 중...</div>;
  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      className={styles.MainButton}
    >
      {isDark ? <GiAbstract007 /> : <GiAbstract008 />}
    </button>
  );
};
export default HeaderDarkModeBtn;
