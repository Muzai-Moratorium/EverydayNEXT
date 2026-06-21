import "./global.scss";

export default function Day4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const savedTheme = localStorage.getItem('theme');
              const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
        }}
      />
      {children}
    </>
  );
}
