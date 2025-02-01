import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//@ts-ignore
import Slider from "react-slick";

export const SimpleSlider = ({ images }: { images: string[] }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} style={{ maxWidth: "320px", margin: "0 auto" }}>
      {images?.map((item, index) => (
        <div key={index}>
          <img src={item} style={{ borderRadius: "12px" }} />
        </div>
      ))}
    </Slider>
  );
};
