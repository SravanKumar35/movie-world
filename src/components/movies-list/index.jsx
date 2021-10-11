import React from "react";
import CurrentPlaying from "./current-playing";
import PopularMovies from "./popular-movies";
import styles from "./styles.module.scss";

const ListPage = () => {
  return (
    <div className={styles.main}>
      <CurrentPlaying />
      <PopularMovies />
    </div>
  );
};

export default ListPage;
