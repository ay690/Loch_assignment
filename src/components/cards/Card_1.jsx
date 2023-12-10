import React, { useState } from "react";
import styles from "../../styles/Card.module.css";
import { LuBell } from "react-icons/lu";

const Card_1 = () => {
    const [email, setEmail] = useState();

    const emailTxt = (e) => {
        setEmail(e.target.value);
    }

    const fetchEmail = () => {}

  return (
    <form className={styles.card} onSubmit={fetchEmail}>
      <button type="submit" className={styles.save}>
        Save
      </button>

      <LuBell className={styles.bell} />
      <p className={styles.para}>We'll be sending notifications to you here</p>
      <input
        type="email"
        className={styles.input}
        onChange={emailTxt}
        value={email}
        placeholder="xyz@gmail.com"
      ></input>
    </form>
  );
};

export default Card_1;
