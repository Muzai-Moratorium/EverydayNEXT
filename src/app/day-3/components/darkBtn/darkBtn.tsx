import { FaRegMoon, FaRegSun } from "react-icons/fa6";
import styles from "./darkBtn.module.scss";

interface DarkBtnProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkBtn = ({ isDark, setIsDark }: DarkBtnProps) => {
  return (
    <button
      className={styles.darkBtn}
      type="button"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <FaRegSun /> : <FaRegMoon />}
    </button>
  );
};
export default DarkBtn;
