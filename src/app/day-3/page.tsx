"use client";

import { useEffect, useState } from "react";
import DarkBtn from "./components/darkBtn/darkBtn";
import styles from "./page.module.scss";

const Home = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("Dark");
    } else {
      document.body.classList.remove("Dark");
    }
  }, [isDark]);
  return (
    <main className={styles.main}>
      <h1>이건 홈 Day-3</h1>
      <DarkBtn isDark={isDark} setIsDark={setIsDark} />
    </main>
  );
};
export default Home;
