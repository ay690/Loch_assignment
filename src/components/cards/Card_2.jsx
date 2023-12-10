import React, { useState } from 'react';
import styles from "../../styles/Card.module.css";
import { LuBarChart2 } from "react-icons/lu";

const Card_2 = () => {
    const [check, setCheck] = useState(true);
    const [selectedAmount, setSelectedAmount] = useState(1000);
  
    const handleCheckboxChange = () => {
      setCheck(!check);
    };
  
    const handleAmountChange = (e) => {
      const selectedValue = parseInt(e.target.value, 10);
      setSelectedAmount(selectedValue);
    };
  
  return (
    <form className={styles.card}>
    <input
      type="checkbox"
      className={styles.check}
      checked={check}
      onChange={handleCheckboxChange}
    />

    <LuBarChart2 className={styles.bell} />
    <p className={styles.sm_para}>
      Notify me when any wallets move more than
    </p>
    <select
      name="balance"
      id="balance"
      value={selectedAmount}
      onChange={handleAmountChange}
      className={styles.input_dropdown}
    >
      <option value={1000}>$1,000.00</option>
      <option value={2500}>$2,500.00</option>
      <option value={5000}>$5,000.00</option>
      <option value={10000}>$10,000.00</option>
    </select>
  </form>
  )
}

export default Card_2
