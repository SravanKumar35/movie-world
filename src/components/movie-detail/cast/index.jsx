import React from "react";
import CastCard from "./cast-card";
import { castHook } from "./hooks";
import styles from "./styles.module.scss";

const Cast = ({ id, movie }) => {
  // castHook handles all the logic
  const { cast } = castHook(id);

  return (
    <div className={styles.main}>
      <h3>CAST</h3>
      <div className={styles.list}>
        {cast?.map((item) => {
          return <CastCard data={item} key={item.cast_id} />;
        })}
      </div>
    </div>
  );
};

export default Cast;
