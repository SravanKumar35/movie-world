import { Pagination } from "@material-ui/lab";
import React from "react";

import { useHook } from "./hooks";
import MobileView from "./mobile-version";
import MovieCard from "./movie-card";
import styles from "./styles.module.scss";

const CurrentPlaying = () => {
  const { data, isMobile, currentPage, handlePageChange, totalPages } =
    useHook();

  // returns different UI for mobile version
  if (isMobile) {
    return (
      <>
        <MobileView data={data} />
        {/* Pagination for mobile view */}
        <div className={styles.pagination}>
          <Pagination
            variant="outlined"
            color="secondary"
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </>
    );
  }

  // Desktop UI
  return (
    <div className={styles.main}>
      <div className={styles.list}>
        {data?.map((movie) => {
          return <MovieCard movie={movie} key={movie?.id} />;
        })}
      </div>

      {/* Pagination for current playing */}
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
