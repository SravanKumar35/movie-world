import React, { useEffect } from "react";
import { movieDetailHook } from "./hooks";
import styles from "./styles.module.scss";
import Header from "../header/index";
import { makeStyles } from "@material-ui/styles";
import { Rating } from "@material-ui/lab";
import { Star } from "@material-ui/icons";
import Banner from "./banner";
import Overview from "./overview";
import Cast from "./cast";

const DetailPage = ({ id }) => {
  const { movie, back } = movieDetailHook(id);
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <img
          onClick={back}
          className={styles.back_button}
          src="/back-icon.svg"
        />
        <h2>{movie?.title}</h2>
      </div>
      <div className={styles.body}>
        <Banner movie={movie} />
        <Overview movie={movie} />
        <Cast id={id} movie={movie} />
      </div>
    </div>
  );
};

export default DetailPage;
