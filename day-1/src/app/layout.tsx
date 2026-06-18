import "./globals.css";
import localFont from "next/font/local";
import Header from "./components/header/header";

const terrarumSans = localFont({
  src: "../../public/font/TerrarumSansBitmap.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={terrarumSans.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
