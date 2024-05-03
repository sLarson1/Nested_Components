import React from "react";

import styles from "./ProductInfoCard.module.css";
import Card from "./Card";

function ProductInfoCard({ product }) {
  return (
    <>
      <Card>
        <div className={styles.card}>
          <div className={styles.wrapper}>
            <img
              className={styles.productPhoto}
              alt={product.imageAlt}
              src={product.imageSrc}
            />
            <h2>{product.title}</h2>
            <p className={styles.price}>${product.price}</p>
            <button>Add to cart</button>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProductInfoCard;
