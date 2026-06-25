import "./global.scss";
import { Footer, Header } from "./components/common/index";

const Day7Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
export default Day7Layout;
