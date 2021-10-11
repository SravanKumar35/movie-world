import React, { useEffect, useState } from "react";
import { popularAPI } from "../../../api";
import { useHook } from "./hooks";
import PosterCard from "./poster-card";
import styles from "./styles.module.scss";
import { Pagination } from "@material-ui/lab";

const PopularMovies = () => {
  // added logic in custom hook
  const { data, totalPages, currentPage, handlePageChange } = useHook();

  return (
    <div className={styles.main}>
      <h3>Popular Movies</h3>
      <div className={styles.list}>
        {data?.map((movie) => {
          return <PosterCard movie={movie} key={movie?.id} />;
        })}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <Pagination
          variant="outlined"
          color="secondary"
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PopularMovies;
