import React from 'react';

import Navbar from '../../components/Navbar';

import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Navbar />
    </div>
  );
}

export default Dashboard;
