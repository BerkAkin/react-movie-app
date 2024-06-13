import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field } from "formik";
import styles from "../style.module.css";

function Login() {
  useEffect(() => {}, []);

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className={`container ${styles.registerBody}`}>
          <div className="row" style={{ height: "100%" }}>
            <div className="col-6">
              <div className="row h-100 text-center d-flex text-light align-items-center">
                <p style={{ fontSize: "7rem" }} className="display-1">
                  CINEMOVES
                </p>
              </div>
            </div>
            <div className={`col-6 d-flex flex-column`} style={{ color: "#b5b5b5" }}>
              <div className="row d-flex justify-content-center flex-column align-items-center my-auto  h-75 ">
                <input placeholder="Kullanıcı Adı" className={`mt-5 text-center ${styles.input}`}></input>
                <input placeholder="Şifre" type="password" className={`mt-5 text-center ${styles.input}`}></input>
              </div>
              <div className="row d-flex justify-content-center flex-column align-items-center h-25">
                <button className={` ${styles.button}`}>Giriş Yap</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
