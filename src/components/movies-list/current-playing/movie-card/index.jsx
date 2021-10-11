import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import styles from "./styles.module.scss";
import { Star } from "@material-ui/icons";

const base_image_url = "https://image.tmdb.org/t/p/original";

const useStyles = makeStyles({
  yellow: {
    color: "#ffe234",
  },
});

const languages = {
  en: "English",
  hi: "Hindi",
  te: "Telugu",
  ta: "Tamil",
  pa: "Punjabi",
  bn: "Bengali",
  ml: "Malayalam",
  kn: "Kannada",
};
const MovieCard = ({ movie }) => {
  const classess = useStyles();
  return (
    <div className={styles.main}>
      <img
        className={styles.poster}
        src={
          movie?.backdrop_path
            ? `${base_image_url}/${movie?.backdrop_path}`
            : "/placeholder.png"
        }
      />
      <div className={styles.movie_details}>
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
        </div>
        <div className={styles.rating_value}>
          <span>{movie?.vote_average / 2}/5</span>
        </div>
        <div className={styles.movie_title}>
          <span>{movie?.title}</span>
          <span> ( {movie?.release_date?.slice(0, 4)}</span>
          <span> {languages[movie?.original_language]} )</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
