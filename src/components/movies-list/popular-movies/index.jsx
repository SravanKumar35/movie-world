import React, { useEffect, useState } from "react";
import { popularAPI } from "../../../api";
import PosterCard from "./poster-card";
import styles from "./styles.module.scss";

const PopularMovies = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async (page) => {
      const { data: { results = [] } = {} } = await popularAPI(page);
      setData(results);
      console.log("popular movies", results);
    };
    getData(1);
  }, []);
  return (
    <div className={styles.main}>
      <span>PopularMovies</span>
      <div className={styles.list}>
        {data?.map((movie) => {
          return <PosterCard movie={movie} key={movie?.id} />;
        })}
      </div>
    </div>
  );
};

export default PopularMovies;
