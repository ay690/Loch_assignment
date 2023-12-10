import React from "react";
import styles from "../styles/Testimonials.module.css";
import Vector from "../assets/Images/Vector.png";
import Carousel from "./Carousel";

const Testimonials = () => {
  return (
    <div>
      <h4 className={styles.heading}> Testimonials</h4>
      <hr className={styles.hr} />
      <img src={Vector} className={styles.vector} alt="vector"></img>
      <div className={styles.testimonials}>
        <Carousel />
      </div>
    </div>
  );
};

export default Testimonials;
