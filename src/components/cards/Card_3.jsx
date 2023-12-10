import React, { useState } from "react";
import { BsClock } from "react-icons/bs";
import styles from "../../styles/Card.module.css";

const Card_3 = () => {
  const [check, setCheck] = useState(true);
  const [days, setDays] = useState(30);

  const handleCheckboxChange = () => {
    setCheck(!check);
  };

  const handleDaysChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    setDays(selectedValue);
  };
  return (
    <form className={styles.card}>
      <input
        type="checkbox"
        className={styles.check}
        checked={check}
        onChange={handleCheckboxChange}
      />

      <BsClock className={styles.bell} />
      <div className={styles.box}>
        <p className={styles.sm_para}>Notify me when any wallet dormant for</p>
        <select
          name="days"
          id="days"
          value={days}
          className={styles.input_dropdown}
          onChange={handleDaysChange}
        >
          <option value="15">{">"} 15 days</option>
          <option value="30">{">"} 30 days</option>
          <option value="60">{">"} 60 days</option>
        </select>
        {check && <span className={styles.active}> becomes active</span>}
      </div>
    </form>
  );
};

export default Card_3;
