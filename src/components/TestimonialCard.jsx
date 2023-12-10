import React from "react";
import styles from "../styles/TestimonialCard.module.css";

const TestimonialCard = (props) => {
  const { name, detail, para } = props.value;
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.detail}>{detail}</p>
      </div>
      <p className={styles.para}>“{para}”</p>
    </div>
  );
};

export default TestimonialCard;
