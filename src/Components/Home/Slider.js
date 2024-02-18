import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import sliderimg1 from "../../assets/unsplash_jFCViYFYcus.jpg";
import sliderimg from "../../assets/slider1.png";
import slider4 from "../../assets/slider4.png";
import prod3 from "../../assets/prod3.png";
import prod4 from "../../assets/prod4.png";
// import prod5 from "../../assets/unsplash_jFCViYFYcus.jpg";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="sliderrr">
      <div className="layoutd"></div>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="slider-background" interval={3000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img
              style={{ height: "296px", width: "100%", objectFit: "cover" }}
              className=""
              src={sliderimg1}
              alt="First slide"
            />
            <div className="cap">
              <h3>SUMMER 2024</h3>
              <h3 className="slider-title">-30% Discount</h3>
              <p className="slider-text">
                We know how large objects will act, but things on a small scale.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slider-background" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img
              style={{ height: "296px", width: "100%", objectFit: "contain" }}
              className=""
              src={slider4}
              alt="First slide"
            />
            <div className="cap">
              <h3 className="slider-title">There is a big discount</h3>
              <p className="slider-text">Up to 30% discount on your purchase</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slider-background2" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img
              style={{ height: "296px", width: "100%", objectFit: "contain" }}
              className=""
              src={sliderimg}
              alt="First slide"
            />
            <div className="cap">
              <h3 className="slider-title">There is a big discount</h3>
              <p className="slider-text">Up to 20% discount on your purchase</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className="slider-background3" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img
              style={{ height: "296px", width: "100%", objectFit: "contain" }}
              className=""
              src={prod3}
              alt="First slide"
            />
            <div className="cap">
              <h3 className="slider-title">There is a big discount</h3>
              <p className="slider-text">Up to 40% discount on your purchase</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className="slider-background4" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img
              style={{ height: "296px", width: "100%", objectFit: "contain" }}
              className=""
              src={prod4}
              alt="First slide"
            />
            <div className="cap">
              <h3 className="slider-title">There is a big discount</h3>
              <p className="slider-text">Up to 10% discount on your purchase</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
