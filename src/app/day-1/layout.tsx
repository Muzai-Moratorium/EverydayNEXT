import localFont from "next/font/local";
import Header from "./components/header/header";

const terrarumSans = localFont({
  src: "../../../public/font/TerrarumSansBitmap.woff2",
  display: "swap",
});

export default function Day1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={terrarumSans.className}>
      <Header />
      {children}
    </div>
  );
}
