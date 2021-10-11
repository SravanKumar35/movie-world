import { Pagination } from "@material-ui/lab";
import React from "react";

import { useHook } from "./hooks";
import MobileView from "./mobile-version";
import MovieCard from "./movie-card";
import styles from "./styles.module.scss";

const CurrentPlaying = () => {
  const { data, isMobile, currentPage, handlePageChange, totalPages } =
    useHook();
  if (isMobile) {
    return <MobileView data={data} />;
  }
  return (
    <div className={styles.main}>
      <div className={styles.list}>
        {data?.map((movie) => {
          return <MovieCard movie={movie} key={movie?.id} />;
        })}
      </div>
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

export default CurrentPlaying;
