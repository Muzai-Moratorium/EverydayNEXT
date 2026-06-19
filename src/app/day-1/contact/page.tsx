import styles from "./page.module.scss";

const Contact = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>여긴컨택트</h1>
    </main>
  );
};

// Verification
if (typeof window !== "undefined") {
  console.log("Contact page loaded");
}

export default Contact;
