"use client";

import DarkBtn from "./components/darkBtn/darkBtn";
import { useDarkMode } from "./hooks/usedarkmode";
import styles from "./page.module.scss";

const Home = () => {
  const [isDark, toggleDarkMode, isMounted] = useDarkMode();
  if (!isMounted) return <div className="loading">로딩 중...</div>;
  return (
    <main className={styles.main}>
      <h1>DAY-4</h1>
      <h2>{isDark ? " 다크 모드 활성화됨" : "라이트 모드 활성화됨"}</h2>
      <p>
        이 페이지는 커스텀 훅 <code>useDarkMode</code>를 사용하여
        구현되었습니다. 로컬 스토리지에 테마 설정을 저장하고 시스템 다크 모드
        기본 설정을 감지하여 반응합니다.
      </p>
      <DarkBtn isDark={isDark} onClick={toggleDarkMode} />
    </main>
  );
};
export default Home;
