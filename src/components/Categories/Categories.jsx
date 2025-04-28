import React from "react";
import styles from "./Categories.module.css";

import categories from "../../data/categories.json";

export const Categories = () => {
  return (
    <section className={styles.container}>
      <div className={styles.categories}>
        {categories.map((categorie, id) => {
          return (
            <div key={id} className={styles.categorie}>
              <div className={styles.imgContainer}>
                <img
                  className={styles.catImg}
                  src={categorie.src}
                  alt={categorie.title}
                />
              </div>
              <p>{categorie.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
