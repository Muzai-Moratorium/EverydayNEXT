import styles from "./page.module.scss";

const About = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>여긴어바웃</h1>
    </main>
  );
};

// Verification
if (typeof window !== "undefined") {
  console.log("About page loaded");
}

export default About;
