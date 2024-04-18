import React, { Component } from "react";
import Slider from "react-slick";
import SliderItems from "./sliderItems";

export default class HeroSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <SliderItems/>
        </Slider>
      </div>
    );
  }
}
