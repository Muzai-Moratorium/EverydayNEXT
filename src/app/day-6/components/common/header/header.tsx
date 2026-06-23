import { HeaderDarkModeBtn, HeaderNav } from "./_index";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.HeaderTop}>
        <h1>DAY-6</h1>
        <HeaderDarkModeBtn />
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
