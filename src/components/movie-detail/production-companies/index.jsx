import React from "react";
import ProductionCard from "./production-card";
import styles from "./styles.module.scss";

const ProductionCompanies = ({ data }) => {
  return (
    <div className={styles.main}>
      <h3>Production Companies</h3>
      <div className={styles.list}>
        {data?.map((item) => {
          return <ProductionCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductionCompanies;
