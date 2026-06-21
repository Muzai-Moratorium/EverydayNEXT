"use client";

import DarkBtn from "./components/darkBtn/darkBtn";
import { ScrollAnimate } from "./components/ScrollAnimate";
import { useDarkMode } from "./hooks/usedarkmode";
import styles from "./page.module.scss";

const Home = () => {
  const [isDark, toggleDarkMode, isMounted] = useDarkMode();
  if (!isMounted) return <div className="loading">로딩 중...</div>;

  return (
    <main className={styles.main}>
      <ScrollAnimate
        className={` ${styles.animateItem} ${styles.fadeInUp}`}
        visibleClassName={styles.visible}
        triggerOnce={true}
      >
        <header className={styles.hero}>
          <h1>DAY-5: Intersection Observer</h1>
          <p>
            <code>react-intersection-observer</code>를 사용한 스크롤 인터랙션
            연습 공간입니다. 아래로 스크롤하며 다양한 진입 애니메이션을 확인해
            보세요.
          </p>
        </header>
      </ScrollAnimate>
      <DarkBtn isDark={isDark} onClick={toggleDarkMode} />
      <ScrollAnimate
        className={` ${styles.animateItem} ${styles.fadeInUp}`}
        visibleClassName={styles.visible}
        triggerOnce={true}
      >
        <h2 className={styles.sectionTitle}>1. Fade In Up (한 번만 실행)</h2>
      </ScrollAnimate>
      <div className={styles.grid}>
        <ScrollAnimate
          className={`${styles.animateItem} ${styles.fadeInUp}`}
          visibleClassName={styles.visible}
          triggerOnce={true}
        >
          <div className={styles.card}>
            <h3>첫 번째 카드</h3>
            <p>
              이 요소는 뷰포트에 도달했을 때 위로 솟아오르며 서서히 나타납니다.{" "}
              <code>triggerOnce={"{true}"}</code>가 설정되어 한 번만 실행됩니다.
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate
          className={`${styles.animateItem} ${styles.fadeInUp} ${styles.delay200}`}
          visibleClassName={styles.visible}
          triggerOnce={true}
        >
          <div className={styles.card}>
            <h3>두 번째 카드</h3>
            <p>
              <code>delay200</code> 클래스가 부여되어 첫 번째 카드보다 0.2초 늦게 순차적으로 나타납니다.
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate
          className={`${styles.animateItem} ${styles.fadeInUp} ${styles.delay400} ${styles.slow}`}
          visibleClassName={styles.visible}
          triggerOnce={true}
        >
          <div className={styles.card}>
            <h3>세 번째 카드</h3>
            <p>
              <code>delay400</code> 및 <code>slow</code>가 부여되어 0.4초 늦게 시작하며, 2초 동안 느릿하게 나타납니다.
            </p>
          </div>
        </ScrollAnimate>
      </div>
      <ScrollAnimate
        className={` ${styles.animateItem} ${styles.fadeGO}`}
        visibleClassName={styles.visible}
        triggerOnce={false}
      >
        <h2 className={styles.sectionTitle}>
          2. Slide In Left & Right (반복 실행)
        </h2>
      </ScrollAnimate>
      <div className={styles.grid}>
        <ScrollAnimate
          className={`${styles.animateItem} ${styles.fadeInLeft}`}
          visibleClassName={styles.visible}
          triggerOnce={false}
        >
          <div className={styles.card}>
            <h3>왼쪽에서 슬라이드</h3>
            <p>
              <code>triggerOnce={"{false}"}</code> 옵션 덕분에 화면에서 완전히
              벗어났다가 다시 스크롤해 들어올 때마다 애니메이션이 반복됩니다.
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate
          className={`${styles.animateItem} ${styles.fadeInRight}`}
          visibleClassName={styles.visible}
          triggerOnce={false}
        >
          <div className={styles.card}>
            <h3>오른쪽에서 슬라이드</h3>
            <p>
              이 카드는 화면의 오른쪽 바깥 영역에서 안쪽으로 밀려 들어오며
              나타납니다. 마찬가지로 스크롤할 때마다 매번 동작합니다.
            </p>
          </div>
        </ScrollAnimate>
      </div>
    </main>
  );
};

export default Home;

console.log("Day-5 page loaded");
