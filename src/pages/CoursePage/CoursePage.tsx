import React from "react";

import Navbar from "../../components/Navbar";
import UnitDropdown from "../../components/UnitDropdown";
import styles from "./CoursePage.module.css";

type props = {
  userId: string;
  courseId: string;
};

const CoursePage: React.FC<props> = () => {
  // Placeholder for future data fetching

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.courseMain}>
        <main className={styles.courseInfo}>
          <h1>Course Title</h1>
          <p>Welcome to the course page!</p>
          <div className={styles.unitsList}>
            <UnitDropdown />
            <UnitDropdown />
            <UnitDropdown />
            <UnitDropdown />
            <UnitDropdown />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursePage;
