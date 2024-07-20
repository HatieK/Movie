import HeaderTopAction from "./HeaderTopAction";
import HeaderTopRight from "./HeaderTopRight";
import HeaderMobileSelect from "./HeaderMobileSelect";
import { useDispatch, useSelector } from "react-redux";
import { handleShowNavbar } from "../../redux/slices/showHamburger";
import HeaderMobile from "../HeaderMobile";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { showNavbar } = useSelector((state) => state.burger);

  const handleClickShowBurger = () => {
    const mobileElement = document.querySelector(".mobile");
    if (!showNavbar && mobileElement) {
      mobileElement.classList.add("active");
    } else if (showNavbar) {
      mobileElement.classList.remove("active");
    }
    dispatch(handleShowNavbar());
  };

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-top-wrap">
              <Link to="" className="main-logo">
                <img
                  src="../../../public/img/header-logo.webp"
                  alt="cine start"
                />
              </Link>
              <HeaderTopAction />
              <HeaderTopRight />
            </div>
            <div className="header-mobile">
              <div className="header-mobile-wrap">
                <a href="" className="main-logo">
                  <img
                    src="../../../public/img/header-logo.webp"
                    alt="cine start"
                  />
                </a>
                <div className="mobile-select">
                  <HeaderMobileSelect />
                </div>
                <div className="mobile-burger" style={{ color: "red" }}>
                  <div
                    className={`burger ${showNavbar ? "active" : ""}`}
                    onClick={() => handleClickShowBurger()}
                  >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
            </div>
            <HeaderBottom />
          </div>
        </div>
      </header>
      <HeaderMobile />
      <div className="mobile-navbar-bottom">
        <nav className="menu-nav">
          <ul className="menu-list">
            <li className="menu-item active">
              <a href="" className="menu-link">
                Lịch Chiếu
                <i className="fa-solid fa-film"></i>
              </a>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                Đặt Vé
                <i className="fa-solid fa-ticket"></i>
              </a>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                <img src="../../../public/img/ic-cor.svg" alt="" />
                Bắp Nước
              </a>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                Tài Khoản
                <i className="fa-solid fa-user"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
