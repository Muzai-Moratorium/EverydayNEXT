"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { dayProjects } from "./dayConfig";
import styles from "./page.module.css";

export default function DashboardPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [slideStartVal, setSlideStartVal] = useState<number>(0);

  // PC용 마우스 드래그 상태
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);

  // 드래그 중 클릭 방지 플래그
  const [isDragging, setIsDragging] = useState(false);

  const nextDayNum = dayProjects.length + 1;

  const allSlides = [
    ...dayProjects,
    {
      day: nextDayNum,
      title: "AWAITING TOMORROW",
      description: "NEXT 30 MINUTES CHALLENGE WILL BE POSTED HERE.",
      tags: [] as string[],
      href: "#",
      isPlaceholder: true,
    },
  ];

  const totalSlides = allSlides.length;

  // 모바일 터치 제스처 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setSlideStartVal(currentIndex);
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const clientX = e.touches[0].clientX;
    const deltaX = clientX - touchStart;

    if (Math.abs(deltaX) > 8) {
      setIsDragging(true);
    }

    const viewportWidth =
      typeof window !== "undefined" ? window.innerWidth : 360;

    const slideDelta = -(deltaX / (viewportWidth * 0.5));
    const newIndex = Math.min(
      Math.max(0, slideStartVal + slideDelta),
      totalSlides - 1,
    );
    setCurrentIndex(newIndex);
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    setCurrentIndex((prev) => Math.round(prev));
    setTimeout(() => setIsDragging(false), 50);
  };

  // PC 마우스 드래그 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
    setSlideStartVal(currentIndex);
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    const clientX = e.clientX;
    const deltaX = clientX - startX;

    if (Math.abs(deltaX) > 8) {
      setIsDragging(true);
    }

    const viewportWidth =
      typeof window !== "undefined" ? window.innerWidth : 360;

    const slideDelta = -(deltaX / (viewportWidth * 0.5));
    const newIndex = Math.min(
      Math.max(0, slideStartVal + slideDelta),
      totalSlides - 1,
    );
    setCurrentIndex(newIndex);
  };

  const handleMouseUpOrLeave = () => {
    if (!isMouseDown) return;
    setIsMouseDown(false);
    setCurrentIndex((prev) => Math.round(prev));
    setTimeout(() => setIsDragging(false), 50);
  };

  // 키보드 방향키 전역 제어
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => Math.max(0, Math.round(prev) - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) =>
          Math.min(totalSlides - 1, Math.round(prev) + 1),
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [totalSlides]);

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
          <h1 className={`${styles.mainTitle} ${styles.outlineText}`}>NEXT</h1>
        </div>
        <div className={styles.heroSub}>
          <div className={styles.heroDesc}>
            <p>
              EVERYDAY NEXT IS A DIGITAL SPECIMEN ARCHIVING 30 MINUTES OF DAILY
              CODING EXERCISES BUILT WITH NEXT.JS AND TYPESCRIPT.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Specimen Section */}
      <main className={styles.main}>
        <div className={styles.gridHeader}>
          <span>PROJECTS ARCHIVE</span>
          <span className={styles.pageIndicator}>
            {Math.round(currentIndex) + 1} / {totalSlides}
          </span>
        </div>

        {/* biome-ignore lint/a11y: slider interaction is handled by pointer events */}
        <div
          className={styles.sliderViewport}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          <div className={styles.sliderTrack}>
            {allSlides.map((project, index) => {
              const isPlaceholder =
                "isPlaceholder" in project && project.isPlaceholder;
              const formattedDay =
                project.day < 10 ? `0${project.day}` : project.day;

              const diff = index - currentIndex;
              const absDiff = Math.abs(diff);
              let transform = "";
              let opacity = 0;
              let zIndex = 0;
              let pointerEvents: "auto" | "none" = "none";
              let filter = "none";

              const isCurrent = index === Math.round(currentIndex);

              if (absDiff <= 2.5) {
                // 미디어 쿼리 기반 반응형 CSS 변수인 --slide-gap를 사용해 X축 거리 조정
                transform = `translate3d(calc(var(--slide-gap, 310px) * ${diff}), ${absDiff * 12}px, 0) scale(${1 - absDiff * 0.08})`;
                opacity = Math.max(0, 1 - absDiff * 0.4);
                zIndex = 10 - Math.round(absDiff);
                filter = absDiff > 0.1 ? `blur(${absDiff * 1}px)` : "none";
              } else {
                transform = `translate3d(${diff > 0 ? "150%" : "-150%"}, 24px, 0) scale(0.8)`;
                opacity = 0;
                zIndex = 0;
              }

              if (isCurrent) {
                pointerEvents = "auto";
              }

              const cardStyle = {
                transform,
                opacity,
                zIndex,
                pointerEvents,
                filter,
              };

              if (isPlaceholder) {
                return (
                  <div
                    key={`placeholder-${project.day}`}
                    className={styles.sliderCard}
                    style={cardStyle}
                    aria-hidden={!isCurrent}
                  >
                    {/* biome-ignore lint/a11y: focus handler is used to update slider index for accessibility */}
                    <div
                      className={`${styles.cardPlaceholder} ${isCurrent ? styles.activeCard : ""}`}
                      tabIndex={0}
                      onFocus={() => setCurrentIndex(index)}
                    >
                      <span className={styles.dayBadgePlaceholder}>
                        DAY_{formattedDay}
                      </span>
                      <div className={styles.placeholderContent}>
                        <h2 className={styles.placeholderTitle}>
                          {project.title}
                        </h2>
                        <p className={styles.placeholderDesc}>
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={project.day}
                  className={styles.sliderCard}
                  style={cardStyle}
                  aria-hidden={!isCurrent}
                >
                  {/* biome-ignore lint/a11y: interactive card handles focus and navigation via Enter key */}
                  <div
                    className={`${styles.card} ${isCurrent ? styles.activeCard : ""}`}
                    tabIndex={0}
                    onFocus={() => setCurrentIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        router.push(project.href);
                      }
                    }}
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.dayBadge}>
                        DAY_{formattedDay}
                      </span>
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
                    <Link
                      href={project.href}
                      className={styles.linkButton}
                      onClick={(e) => {
                        if (isDragging) {
                          e.preventDefault();
                        }
                      }}
                    >
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
                </div>
              );
            })}
          </div>
        </div>

        {/* 하단 레인지 슬라이더 컨트롤러 */}
        <div className={styles.rangeSliderContainer}>
          <input
            type="range"
            min="0"
            max={totalSlides - 1}
            step="0.01"
            value={currentIndex}
            onChange={(e) => setCurrentIndex(parseFloat(e.target.value))}
            className={styles.rangeInput}
            aria-label="프로젝트 선택 슬라이더"
          />
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
