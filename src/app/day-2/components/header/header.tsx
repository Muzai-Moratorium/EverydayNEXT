import Link from "next/link";
import styles from "./header.module.scss";
import { navItems } from "./navConfig";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>이건 헤더</h1>
      <nav className={styles.Nav}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
