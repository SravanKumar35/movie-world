import React from "react";
import { Rating } from "@material-ui/lab";
import { Star } from "@material-ui/icons";
import styles from "./styles.module.scss";
import { base_image_url, languages, useStyles } from "../../../constants";

const Banner = ({ movie }) => {
  const classess = useStyles();
  return (
    <div className={styles.banner}>
      <img
        className={styles.poster}
        src={
          movie?.poster_path
            ? `${base_image_url}/${movie?.poster_path}`
            : "/poster.png"
        }
      />
      <div className={styles.details}>
        <div className={styles.movie_title}>
          <span>{movie?.title}</span>
        </div>
        <div className={styles.rating}>
          <Rating
            name="read-only"
            className={classess.yellow}
            size="small"
            value={movie?.vote_average / 2}
            readOnly
            precision={0.1}
            emptyIcon={<Star style={{ color: "#c0c0c0" }} fontSize="inherit" />}
          />
          <span>{movie?.vote_average / 2}/5</span>
        </div>
        <div className={styles.language}>
          <span>{languages[movie?.original_language]}</span>
        </div>
        <div className={styles.year}>
          <span>{movie?.release_date?.slice(0, 4)}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
