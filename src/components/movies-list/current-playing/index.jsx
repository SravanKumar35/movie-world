import React, { useEffect, useState } from "react";

import { nowPlayingAPI } from "../../../api";
import MovieCard from "./movie-card";
import styles from "./styles.module.scss";

const CurrentPlaying = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async (page) => {
      const { data: { results = [] } = {} } = await nowPlayingAPI(page);
      console.log("current-playing", results);
      setData(results);
    };
    getData(1);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.list}>
        {data?.map((movie) => {
          return <MovieCard movie={movie} key={movie?.id} />;
        })}
      </div>
    </div>
  );
};

export default CurrentPlaying;
