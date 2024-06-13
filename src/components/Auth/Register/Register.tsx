import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field } from "formik";
import styles from "../style.module.css";

function Register() {
  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className={`container h-50`}>
          <div className={`row h-100 mx-auto ${styles.registerBody}`}>
            <div className="col-6">
              <div className="row text-center d-flex text-light align-items-center h-100">
                <p style={{ fontSize: "7rem" }} className=" fw-bolder ps-5">
                  ÜYE OL
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="row h-75 d-flex flex-column justify-content-evenly align-items-center">
                <input placeholder="Ad-Soyad" className={`mt-3  ${styles.input}`}></input>
                <input placeholder="E-Mail" className={`mt-4 ${styles.input}`}></input>
                <input placeholder="Şifre" type="password" className={`mt-4 ${styles.input}`}></input>
                <input placeholder="Şifre Tekrar" type="password" className={`mt-4 ${styles.input}`}></input>
              </div>
              <div className="row h-25 d-flex flex-column justify-content-evenly align-items-center">
                <button className={` ${styles.button}`}>Üye Ol</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
