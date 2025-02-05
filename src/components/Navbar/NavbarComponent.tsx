import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function NavbarComponent() {
  return (
    <>
      <div>
        <nav className={`fixed-top navbar navbar-expand-lg navbar-dark ${styles.bgBlur}`}>
          <div className="container-fluid ">
            <a className="navbar-brand fs-1 ms-2 fw-bolder" href="#">
              CINEMOVES
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
                  <Link className="nav-link ms-4 mt-2" to={`/news`}>
                    YENİ FİLMLER
                  </Link>
                </li>
                <li className=" nav-item ">
                  <Link className="nav-link ms-4 mt-2" to={`/trends`}>
                    TREND FİLMLER
                  </Link>
                </li>
                <li className=" nav-item ">
                  <Link className="nav-link ms-4 mt-2" to={`/genres`}>
                    TÜRLER
                  </Link>
                </li>
                <li className=" nav-item ">
                  <Link className="nav-link ms-4 mt-2" to={`/series`}>
                    DİZİLER
                  </Link>
                </li>
              </ul>
              <div className="d-flex justify-content-center align-items-center">
                <Link
                  style={{ height: "90px", width: "150px" }}
                  className="nav-link me-4 text-center  pt-4 text-nowrap fs-5 text-light"
                  to={`/login`}
                >
                  OTURUM AÇ
                </Link>

                <Link
                  style={{ height: "90px", width: "100px" }}
                  className="nav-link me-4 pt-4  text-center text-nowrap fs-5 text-light"
                  to={`/register`}
                >
                  ÜYE OL
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavbarComponent;
