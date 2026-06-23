import { AboutConfig } from "./config/aboutconfig";
import styles from "./page.module.scss";

const AboutPage = () => {
  const todays = AboutConfig.filter((item) => item.id < 3);

  const workLogs = AboutConfig.filter((item) => item.id > 3);

  return (
    <main className={styles.container}>
      <ul className={styles.todays}>
        {todays.map((item) => (
          <li key={item.id}>
            <h1>{item.text}</h1>
          </li>
        ))}
      </ul>
      <ul>
        {workLogs.map((item) => (
          <li key={item.id}>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default AboutPage;
