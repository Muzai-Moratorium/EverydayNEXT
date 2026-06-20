import Link from "next/link";
import styles from "./page.module.css";

interface DayProject {
  day: number;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

const dayProjects: DayProject[] = [
  {
    day: 1,
    title: "기본 라우팅과 컴포넌트",
    description:
      "App Router 기반의 기본 페이지 구성, 라우팅 그룹 (pages) 생성 및 헤더 컴포넌트 실습",
    tags: ["App Router", "Routing", "CSS Modules"],
    href: "/day-1",
  },
  {
    day: 2,
    title: "설정 파일 및 동적 멤버 렌더링",
    description:
      "기존 멤버 구성 정보 객체를 활용한 화면 데이터 렌더링 및 헤더/푸터 공통 레이아웃 구성 실습",
    tags: ["Data Rendering", "Layouts", "TypeScript"],
    href: "/day-2",
  },
  {
    day: 3,
    title: "다크모드 상태 관리 및 컴포넌트 분리",
    description:
      "useState와 useEffect를 이용한 다크모드 구현, 버튼 컴포넌트 분리 및 fixed 스타일링 실습",
    tags: ["useState", "useEffect", "CSS Variables", "Global SCSS"],
    href: "/day-3",
  },
];

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      {/* Neue Montreal Header Grid */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.logo}>EVERYDAY.NEXT</span>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.edition}>EDITION 2026</span>
          <span className={styles.statusLabel}>[ ACTIVE ARCHIVE ]</span>
        </div>
      </header>

      {/* Hero Visual Specimen */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.mainTitle}>EVERYDAY</h1>
          <h1 className={`${styles.mainTitle} ${styles.outlineText}`}>
            NEXT
          </h1>
        </div>
        <div className={styles.heroSub}>
          <div className={styles.heroDesc}>
            <p>
              EVERYDAY NEXT IS A DIGITAL SPECIMEN ARCHIVING 30 MINUTES OF DAILY
              CODING EXERCISES BUILT WITH NEXT.JS AND TYPESCRIPT.
            </p>
          </div>
          <div className={styles.heroMeta}>
            {/* <span>FOUNDRY / LOCALHOST</span>
            <span>DEVELOPER / DEULUL</span> */}
          </div>
        </div>
      </section>

      {/* Grid Specimen Section */}
      <main className={styles.main}>
        <div className={styles.gridHeader}>
          <span>PROJECTS LIST</span>
          <span>SELECT TO VIEW SPECIMEN</span>
        </div>
        <div className={styles.grid}>
          {dayProjects.map((project) => (
            <div key={project.day} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.dayBadge}>DAY_0{project.day}</span>
                <span className={styles.tagLabel}>[ COMPLETED ]</span>
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={project.href} className={styles.linkButton}>
                ENTER STUDYROOM
                <svg
                  className={styles.arrow}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>화살표</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          ))}

          {/* Placeholder Grid Cell */}
          <div className={styles.cardPlaceholder}>
            <span className={styles.dayBadgePlaceholder}>DAY_04</span>
            <div className={styles.placeholderContent}>
              <h2 className={styles.placeholderTitle}>AWAITING TOMORROW</h2>
              <p className={styles.placeholderDesc}>
                NEXT 30 MINUTES CHALLENGE WILL BE POSTED HERE.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <p>© 2026 EVERYDAYNEXT. ALL RIGHTS RESERVED.</p>
        </div>
        <div className={styles.footerRight}>
          <p>TYPOGRAPHY INSPIRED BY PANGRAM PANGRAM</p>
        </div>
      </footer>
    </div>
  );
}
