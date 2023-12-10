import React from 'react'
import styles from "../styles/Landing_page.module.css";
import Card_1 from './cards/Card_1';
import Card_2 from './cards/Card_2';
import Card_3 from './cards/Card_3';

const Slider = () => {
  return (
    <div className={styles.cards}>
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <Card_1 />
        </div>
        <div className="slide">
          <Card_2 />
        </div>
        <div className="slide">
          <Card_3 />
        </div>
        <div className="slide">
          <Card_1 />
        </div>
        <div className="slide">
          <Card_2 />
        </div>
        <div className="slide">
          <Card_3 />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Slider;
