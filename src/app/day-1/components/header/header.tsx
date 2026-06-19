import Link from "next/link";
import styles from "./header.module.scss";
import { navItems } from "./navconfig";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>이건 헤더</h1>
      <nav>
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
