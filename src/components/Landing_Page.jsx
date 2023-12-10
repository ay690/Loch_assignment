import React from "react";
import styles from "../styles/Landing_page.module.css";
import FirstGroup from "./FirstGroup";
import SecondGroup from "./SecondGroup";
import Slider from "./Slider";
import Cohorts from "../assets/Images/Cohorts.png";

const Landing_Page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.first_block}>
        <FirstGroup />
        <Slider />
      </section>
      <section className={styles.second_block} >
        <img src={Cohorts} className={styles.Cohorts} alt="Cohorts Pic"/>
        <SecondGroup />
      </section>
    </main>
  );
};

export default Landing_Page;
