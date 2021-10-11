import React from "react";
import styles from "./styles.module.scss";

const Overview = ({ movie }) => {
  return (
    <div style={{ marginRight: "13vw", marginTop: "40px" }}>
      <h3>Overview</h3>
      <div className={styles.overview}>
        <p style={{ textAlign: "justify" }}>{movie?.overview}</p>
      </div>
    </div>
  );
};

export default Overview;
