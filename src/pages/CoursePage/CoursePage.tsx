import React from "react";

import Navbar from "../../components/Navbar";
import UnitDropdown from "../../components/UnitDropdown";

import UpdatesPanel from "../../components/UpdatesPanel";
import { sampleAnnouncements } from "../../data/updatesPanelData";

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
        <div className={styles.courseInfo}>
          <h1>Course Title</h1>
          <p>Welcome to the course page!</p>
          <div className={styles.unitsList}>
            <UnitDropdown />
            <UnitDropdown />
            <UnitDropdown />
            <UnitDropdown />
            <UnitDropdown />
          </div>
        </div>
        <aside>
          <UpdatesPanel panelHeadline="Announcements" contentType="announcements" content={sampleAnnouncements} />
          {/* A temporary placeholder for chat section */}
          <div className={styles.chatBlock}>
            <div className={styles.chatMessages}>
              <p><strong>Alice:</strong> Hi everyone!</p>            
            </div>
            <div className={styles.chatMessages}>
              <p><strong>Alice:</strong> Hi everyone!</p>            
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CoursePage;
