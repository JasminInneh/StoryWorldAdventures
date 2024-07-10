import React from "react";
import styles from "../../styles/PageBanner.module.css"; // Import the CSS Module

const PageBanner = ({ text }) => {
  return (
    <div className={styles.banner}>
      <h1>{text}</h1>
    </div>
  );
};

export default PageBanner;




