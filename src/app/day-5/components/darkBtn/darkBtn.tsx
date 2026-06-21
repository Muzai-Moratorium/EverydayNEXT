import { FaRegMoon, FaRegSun } from "react-icons/fa6";
import Button from "../ui/Button/Button";
import styles from "./darkBtn.module.scss";

interface DarkBtnProps {
  isDark: boolean;
  onClick: () => void;
}

const DarkBtn = ({ isDark, onClick }: DarkBtnProps) => {
  return (
    <Button className={styles.darkBtn} type="button" onClick={onClick}>
      {isDark ? <FaRegSun /> : <FaRegMoon />}
    </Button>
  );
};
export default DarkBtn;
