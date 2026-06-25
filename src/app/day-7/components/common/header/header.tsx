import Nav from "./components/headerNav/headerNav";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.logo}>EverydayNEXT</div>
      </div>
      <Nav />
      <div className={styles.headerRight}>
        <span className={styles.edition}>EDITION 2026</span>
        <span className={styles.statusLabel}>DAY-07</span>
      </div>
    </header>
  );
};
export default Header;
