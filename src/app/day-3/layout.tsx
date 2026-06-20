import Header from "../day-3/components/header/header";
import "./global.scss";

export default function Day3Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
