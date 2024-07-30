import HeaderTopRight from "./HeaderTopRight";
import { useDispatch, useSelector } from "react-redux";
import { handleShowNavbar } from "../../redux/slices/showHamburger";
import HeaderMobile from "../HeaderMobile";
import { Link } from "react-router-dom";
import { THEATER_DETAIL } from "../../constants/path";

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

  const theaterDetail = THEATER_DETAIL;

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
          </div>
        </div>
      </header>
      <HeaderMobile />
    </>
  );
};

export default Header;
