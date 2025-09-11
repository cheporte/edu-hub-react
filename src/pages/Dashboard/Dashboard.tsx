import React from 'react';

import Navbar from '../../components/Navbar';
import Deadlines from '../../components/Deadlines';
import CourseThumbnail from '../../components/CourseThumbnail';
import RecentNews from '../../components/RecentNews';

import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Navbar />
      <div className={styles.importantSection}>
        <Deadlines />
        <RecentNews />
      </div>
      
      <div className={styles.courseList}>
        <CourseThumbnail courseTitle={"Організація баз даних"} progress={50}/>
        <CourseThumbnail courseTitle={"Веб-технології та веб-дизайн"} progress={100}/>
        <CourseThumbnail courseTitle={"Основи смарт-технологій і систем"} progress={10}/>
      </div>
    </div>
  );
}

export default Dashboard;