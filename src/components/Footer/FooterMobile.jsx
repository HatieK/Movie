import { Col, Row } from "antd";
import React from "react";
import FooterRow from "./FooterRow";
import FooterSocialList from "./FooterSocialList";

const FooterMobile = () => {
  return (
    <div className="footer-mobile">
      <Col span={8} className="footer-social">
        <Row className="footer-grow" style={{ display: "block" }}>
          <a href="#">
            <img
              className="footer-logo"
              src="../../img/header-logo.webp"
              alt=""
            />
          </a>
          <p className="text">BE HAPPY, BE A START</p>
          <FooterSocialList />
        </Row>
      </Col>
      <Row className="footer-grow">
        <FooterRow />
      </Row>
    </div>
  );
};

export default FooterMobile;
