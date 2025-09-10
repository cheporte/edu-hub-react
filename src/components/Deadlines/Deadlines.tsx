import React from "react";

import styles from "./Deadlines.module.css";

const Deadlines: React.FC = () => {
  return (
    <section className={styles.deadlinesSection}>
      <div className={styles.deadlinesTitle}>Наближаються дедлайни</div>
      <div className={styles.deadlinesList}>
        <div className={styles.deadlineItem}>
          <span>📝</span>
          <span>Здати лабораторну №2 з "Організація баз даних"</span>
          <span style={{ marginLeft: "auto", fontWeight: 600 }}>12.09.2025</span>
        </div>
        <div className={styles.deadlineItem}>
          <span>📄</span>
          <span>Завантажити проект з "Веб-технології та веб-дизайн"</span>
          <span style={{ marginLeft: "auto", fontWeight: 600 }}>15.09.2025</span>
        </div>
        <div className={styles.deadlineItem}>
          <span>🧠</span>
          <span>Підготуватися до тесту з "Основи смарт-технологій і систем"</span>
          <span style={{ marginLeft: "auto", fontWeight: 600 }}>18.09.2025</span>
        </div>
        <div className={styles.deadlineItem}>
          <span>🧠</span>
          <span>Підготуватися до тесту з "Основи смарт-технологій і систем"</span>
          <span style={{ marginLeft: "auto", fontWeight: 600 }}>18.09.2025</span>
        </div>
      </div>
    </section>
  );
};

export default Deadlines;
