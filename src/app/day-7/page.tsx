"use client";

import { useState } from "react";
import { Modal } from "./components/common";
import { Day7Config } from "./day7Config";
import styles from "./page.module.scss";

const Day7 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const todays = Day7Config.filter((item) => item.id === 1);
  const workLogs = Day7Config.filter((item) => item.id >= 2);

  return (
    <main className={styles.container}>
      <section className={styles.contentSection}>
        <button
          type="button"
          className={styles.demoButton}
          onClick={() => setIsModalOpen(true)}
        >
          [ OPEN NOTICE ]
        </button>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Notice"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <ul className={styles.workList}>
            {todays.map((item) => (
              <h1 key={item.id}>{item.text}</h1>
            ))}
            {workLogs.map((item) => (
              <li key={item.id}>
                <mark
                  style={{
                    margin: 0,
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "var(--text-main)",
                    // backgroundColor: "var(--accent-color)",
                  }}
                >
                  {item.text}
                </mark>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </main>
  );
};

export default Day7;
