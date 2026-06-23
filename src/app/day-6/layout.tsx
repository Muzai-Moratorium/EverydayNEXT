import "./global.scss";
import { Footer, Header } from "./components/common/_index";

const Day6Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="layoutWrapper">
      <Header />
      {children}
      <Footer />
    </section>
  );
};
export default Day6Layout;
