import React from "react";
import Cohorts from "../assets/Images/Cohorts.png";
import styles from "../styles/Landing_page.module.css";
import FirstGroup from "./FirstGroup";
import Slider from "./Slider";
import SecondGroup from "./SecondGroup";
import Testimonials from "./Testimonials";
import PopUp from "./PopUp";

const Landing_Page = () => {
  return (
    <>
      <PopUp />
      <main className={styles.main}>
        <section className={styles.first_block}>
          <FirstGroup />
          <Slider />
        </section>
        <section className={styles.second_block}>
          <img src={Cohorts} className={styles.Cohorts} alt="Cohorts Pic" />
          <SecondGroup />
        </section>
        <Testimonials />
      </main>
    </>
  );
};

export default Landing_Page;
