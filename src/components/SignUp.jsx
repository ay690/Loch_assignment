import React, { useState } from "react";
import styles from "../styles/SignUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const onSignup = (e) => {
    e.preventDefault();
    window.location.href = "https://app.loch.one/welcome";
    console.log(email);
  };

  const setEmailValue = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  };

  return (
    <div className={styles.signup} id="signup">
      <form className={styles.signup_detail} onSubmit={onSignup}>
        <h2 className={styles.h2}>Sign up for exclusive access.</h2>
        <input
          className={styles.input}
          type="email"
          placeholder="Your email address"
          onChange={setEmailValue}
          value={email}
          required
        />
        <button className={styles.button} type="submit">
          Get Started
        </button>
        <span className={styles.span}>
          You'll receive an email with an invite link to join.
        </span>
      </form>
    </div>
  );
};

export default SignUp;
