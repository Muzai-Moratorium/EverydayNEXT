"use client";
import Image from "next/image";
import { useDarkMode } from "./hooks/useDarkMode";
import { usePhoto } from "./hooks/usePhoto";
import styles from "./page.module.scss";
import { IMAGES } from "./photoConfig";

const Day8 = () => {
  const [index, handClickA, handClickB] = usePhoto();
  const [isDark, toggleDarkMode] = useDarkMode();
  return (
    <main className={styles.mainContainer}>
      <h1>
        <mark>{isDark ? "다크모드" : "라이트모드"}</mark>
      </h1>
      <button type="button" onClick={toggleDarkMode}>
        {isDark ? "눌러" : "눌러!"}
      </button>
      <div className={styles.photoContainer}>
        <h2>
          {index + 1} / {IMAGES.length}
        </h2>
        <div className={styles.imageWrapper}>
          <Image
            src={IMAGES[index]}
            alt="photo"
            fill
            unoptimized
            className={styles.image}
          />
        </div>
        <button type="button" onClick={handClickB} className={styles.navButton}>
          뒤로
        </button>
        <button type="button" onClick={handClickA} className={styles.navButton}>
          다음
        </button>
      </div>
    </main>
  );
};
export default Day8;
