import Link from "next/link";
import { footerConfig } from "./config/footerConfig";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerLinks}>
        {footerConfig.links.map((link) => (
          <Link key={link.id} href={link.src}>
            {link.name}
          </Link>
        ))}
      </div>
      <small>
        © {new Date().getFullYear()} {footerConfig.companyName}. {footerConfig.copyright}
      </small>
    </footer>
  );
};

export default Footer;

