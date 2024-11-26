import flagEnIcon from "../../assets/imgs/template/flag-en.svg";
// import flagEn from "../../assets/imgs/template/en.svg";
import flagEn from "../../assets/imgs/template/en.svg";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container-topbar">
        <div className="menu-topbar-left d-none d-xl-block">
          <ul className="nav-small">
            <li>
              <a className="font-xs" href="page-about-us.html">
                About Us
              </a>
            </li>
            <li>
              <a className="font-xs" href="page-careers.html">
                Careers
              </a>
            </li>
            <li>
              <a className="font-xs" href="page-register.html">
                Open a shop
              </a>
            </li>
          </ul>
        </div>
        <div className="info-topbar text-center d-none d-xl-block">
          <span className="font-xs color-brand-3">
            Free shipping for all orders over
          </span>
          <span className="font-sm-bold color-success"> $75.00</span>
        </div>
        <div className="menu-topbar-right">
          <span className="font-xs color-brand-3">Need help? Call Us:</span>
          <span className="font-sm-bold color-success"> + 1800 900</span>
          <div className="dropdown dropdown-language">
            <button
              className="btn dropdown-toggle"
              id="dropdownPage"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
              data-bs-display="static"
            >
              <span className="dropdown-right font-xs color-brand-3">
                <img src={flagEn} alt="Ecom" /> English
              </span>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-light"
              aria-labelledby="dropdownPage"
              data-bs-popper="static"
            >
              <li>
                <a className="dropdown-item" href="#">
                  <img src={flagEnIcon} alt="Ecom" /> English
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <img src="assets/imgs/template/flag-fr.svg" alt="Ecom" />{" "}
                  Français
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <img src="assets/imgs/template/flag-es.svg" alt="Ecom" />{" "}
                  Español
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <img src="assets/imgs/template/flag-pt.svg" alt="Ecom" />{" "}
                  Português
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <img src="assets/imgs/template/flag-cn.svg" alt="Ecom" />{" "}
                  中国人
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-language">
            <button
              className="btn dropdown-toggle"
              id="dropdownPage2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
              data-bs-display="static"
            >
              <span className="dropdown-right font-xs color-brand-3">USD</span>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-light dropdown-menu-end"
              aria-labelledby="dropdownPage2"
              data-bs-popper="static"
            >
              <li>
                <a className="dropdown-item active" href="#">
                  USD
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  EUR
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  AUD
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  SGP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
