import { Carousel } from "antd";

const BannerMovie = ({ bannerList }) => {
  return (
    <div className="banner-movie">
      <Carousel arrows infinite={false}>
        {bannerList.map((banner) => {
          return (
            <div key={banner.maBanner}>
              <img
                src={banner.hinhAnh}
                alt="banner-cine-start"
                className="banner-item"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BannerMovie;
