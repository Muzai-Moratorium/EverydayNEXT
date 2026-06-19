import { MemberData } from "./memberConfig";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <h1>여긴 홈</h1>
      {MemberData.map((item) => (
        <p key={item.id}>
          이름:{item.name}
          {item.age}세
        </p>
      ))}
    </main>
  );
};

export default Home;
