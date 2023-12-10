import React from "react";
import styles from "../styles/Landing_page.module.css";
import FirstGroup from "./FirstGroup";
import Slider from "./Slider";

const Landing_Page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.first_block}>
        <FirstGroup />
        <Slider />
      </section>
    </main>
  );
};

export default Landing_Page;
