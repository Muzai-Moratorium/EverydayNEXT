import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export default function Day2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
