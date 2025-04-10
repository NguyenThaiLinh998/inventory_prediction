import React from "react";
import styles from "./FullScreenLoader.module.css";

const FullScreenLoader: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default FullScreenLoader;
