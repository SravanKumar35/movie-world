import React from "react";
import styles from "./styles.module.scss";
import { base_image_url } from "../../../../constants";

const ProductionCard = ({ data }) => {
  return (
    <div className={styles.main}>
      <img
        className={styles.profile_img}
        src={
          data?.logo_path
            ? `${base_image_url}/${data.logo_path}`
            : "/organization.png"
        }
      />
      <div className={styles.name}>
        <span>{data?.name}</span>
      </div>
    </div>
  );
};

export default ProductionCard;
