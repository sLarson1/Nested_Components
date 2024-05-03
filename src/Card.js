import React from "react";

import styles from "./Card.module.css";

function Card({ elevation, children }) {
  /* TODO
  
    return <div className={styles.card}>{children}</div>;

 const elev = true
 const cardType = elevat
  return (
    <>
  {elev && (<div className={styles.card}>
  {children}</div>)
  }
  </>
)    
  */
  return <div className={styles.card}>{children}</div>;
}

export default Card;
