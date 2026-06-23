import { useCallback, useEffect, useState } from "react";

export const useDarkMode = () => {
  // 1. 하이드레이션 에러 방지를 위해 초기 상태는 기본값(false)으로 설정
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // 2. 컴포넌트가 클라이언트에 마운트된 직후 테마 상태 확정
  useEffect(() => {
    setIsMounted(true);

    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    // 저장된 테마가 있으면 그것을 따르고, 없으면 시스템 설정을 따름
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
    }
  }, []);

  // 3. 시스템 테마 실시간 변경 감지 및 DOM 클래스 제어
  useEffect(() => {
    if (!isMounted) return;

    const root = document.documentElement; // html 태그 타겟 (Next.js 권장)

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // OS 시스템 테마 실시간 변경 감지 리스너
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      // 사용자가 수동으로 설정한 기록이 없을 때만 시스템 테마를 실시간 추적
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [isDark, isMounted]);

  // 4. 수동 토글 함수
  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return [isDark, toggleDarkMode, isMounted] as const;
};
