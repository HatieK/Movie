import React from "react";
import { Link } from "react-router-dom";

const FooterSocialList = () => {
  return (
    <div className="footer-social__list">
      <Link className="social-link" href="">
        <img src="../../img/footer-facebook.svg" alt="facebook" />
      </Link>
      <Link className="social-link" href="">
        <img src="../../img/footer-youtube.svg" alt="youtube" />
      </Link>
      <Link className="social-link" href="">
        <img src="../../img/ic-tittok.svg" alt="tiktok" />
      </Link>
      <Link className="social-link" href="">
        <img src="../../img/ic-zl-white.svg" alt="zalo" />
      </Link>
    </div>
  );
};

export default FooterSocialList;
