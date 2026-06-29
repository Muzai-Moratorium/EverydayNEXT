import Link from "next/link";
import styles from "./nav.module.css";
import { NavItem } from "./navConfig";

const Nav = () => {
  return (
    <nav className={styles.mainNav}>
      <ul>
        {NavItem.map((item) => (
          <li key={item.id}>
            <Link href={item.src}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
