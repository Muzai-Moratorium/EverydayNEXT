import Link from "next/link";
import { NavItem } from "@/app/day-6/components/common/header/config/navConfig";
import styles from "./headerNav.module.scss";

const HeaderNav = () => {
  return (
    <nav className={styles.mainHeaderNav}>
      <ul>
        {NavItem.map((item) => (
          <li key={item.id}>
            <Link href={item.src}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default HeaderNav;
