import React from "react";

function FooterComponent() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid  ">
            <a className="navbar-brand fs-1 " href="#">
              MovieMania
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" collapse  navbar-collapse" id="navbarSupportedContent">
              <ul className=" navbar-nav  me-auto mb-2 mb-lg-0">
                <li className=" nav-item ">
                  <a className="nav-link ms-4 mt-2" aria-current="page" href="#">
                    FİLMLER
                  </a>
                </li>
              </ul>
              <div className="d-flex justify-content-center align-items-center">
                <a className="w-100 btn-dark btn btn-lg fs-5 text-nowrap" style={{ height: "90px", borderRadius: 0, paddingTop: "30px" }}>
                  OTURUM AÇ
                </a>
                <a className="w-100 btn-dark btn btn-lg fs-5" style={{ height: "90px", borderRadius: 0, paddingTop: "30px" }}>
                  ÜYE OL
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default FooterComponent;
