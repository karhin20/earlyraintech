import React, { Component } from "react";
import Slider from "react-slick";

export default class SponsorsLogo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
            <h3>Sponsor 1</h3>
          </div>
          <div>
            <h3>Sponsor 2</h3>
          </div>
          <div>
            <h3>Sponsor 3</h3>
          </div>
          <div>
            <h3>Sponsor 4</h3>
          </div>
          <div>
            <h3>Sponsor 5</h3>
          </div>
          <div>
            <h3>Sponsor 6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}