import React from "react";
import styles from "../styles/SignUp.module.css";
import SignUp from "./SignUp";

const PopUp = () => {

  const open = () => {
    const bu = document.getElementById("signup");
    bu?.classList.add(styles.signup_mo);
    bu?.classList.remove(styles.signup);
  };

  const close = () => {
    const bu = document.getElementById("signup");
    bu?.classList.remove(styles.signup_mo);
    bu?.classList.add(styles.signup);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-dark btn-sm get-started"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={open}
      >
        Get Started
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={close}
              ></button>
            </div>

            <SignUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
