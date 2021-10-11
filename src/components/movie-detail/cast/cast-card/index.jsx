import React from "react";
import styles from "./styles.module.scss";
import { base_image_url } from "../../../../constants";

const CastCard = ({ data }) => {
  return (
    <div className={styles.main}>
      <img
        className={styles.profile_img}
        src={
          data?.profile_path
            ? `${base_image_url}/${data.profile_path}`
            : "/user.png"
        }
      />
      <div className={styles.name}>
        <span>{data?.original_name}</span>
      </div>
    </div>
  );
};

export default CastCard;
