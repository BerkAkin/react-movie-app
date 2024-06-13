import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field } from "formik";
import styles from "../style.module.css";

function Login() {
  useEffect(() => {}, []);

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className={`container h-50`}>
          <div className={`row w-50 h-100 mx-auto ${styles.registerBody}`}>
            <div className="col-12">
              <div className="row text-center d-flex text-light align-items-center h-25">
                <p style={{ fontSize: "4.5rem" }} className="pt-4 fw-bolder">
                  GİRİŞ YAP
                </p>
              </div>
              <div className=" row h-50 d-flex flex-column justify-content-evenly align-items-center">
                <input placeholder="E-Mail" className={`mt-2 ${styles.input}`}></input>
                <input placeholder="Şifre" type="password" className={`${styles.input}`}></input>
              </div>

              <div className="row h-25 ">
                <div className="col-7  h-100 d-flex justify-content-end align-items-center">
                  <button className={` ${styles.button}`}>Giriş Yap</button>
                </div>
                <div className="col-4  h-100 d-flex justify-content-start align-items-center">
                  <a href="#" className="text-white">
                    {" "}
                    Şifremi Unuttum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
