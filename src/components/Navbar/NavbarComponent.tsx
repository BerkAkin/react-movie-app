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
                <a className="w-100 btn btn-lg fs-5 text-nowrap text-light" style={{ height: "90px", borderRadius: 0, paddingTop: "30px" }}>
                  <Link className="nav-link ms-4 mt-2" to={`/login`}>
                    OTURUM AÇ
                  </Link>
                </a>
                <a className="w-100 btn btn-lg fs-5 text-light" style={{ height: "90px", borderRadius: 0, paddingTop: "30px" }}>
                  <Link className="nav-link ms-4 mt-2" to={`/register`}>
                    ÜYE OL
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavbarComponent;
