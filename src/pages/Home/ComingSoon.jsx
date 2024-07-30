import { Col, Row } from "antd";
import React from "react";
import CardFilm from "../../components/CardFilm";

const ComingSoon = ({ comingSoon }) => {
  return (
    <div className="coming-soon">
      <h2 className="heading">PHIM SẮP CHIẾU</h2>
      <Row gutter={[16, 32]} className="movie-list">
        {comingSoon.map((item) => {
          return (
            <Col span={8} key={item.maPhim} className="card-movie-item">
              <CardFilm dataCardFilm={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ComingSoon;
