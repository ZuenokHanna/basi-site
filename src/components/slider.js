import React from 'react'
import Slider from "react-slick";

import SliderElem from './slider-elem.js'

import './components-style/scss/slick/slick-theme.css'
import './components-style/scss/slick/slick.css'

import ArrowNext from './components-style/img/contol-right.png'
import ArrowPrev from './components-style/img/contol-left.png'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundImage: `url(${ArrowNext})` }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundImage: `url(${ArrowPrev})` }}
      onClick={onClick}
    />
  );
}

class SimpleSlider extends React.Component {

  render() {

    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
  ]
    };

    let info = [
        	{
        		title:"trans expo odessa",
        		data:"15.03.2019",
        		text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        	},
        	{
        		title:"trans expo odessa",
        		data:"15.03.2019",
        		text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        	},
        	{
        		title:"trans expo odessa",
        		data:"15.03.2019",
        		text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        	},
        	{
        		title:"trans expo odessa",
        		data:"15.03.2019",
        		text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        	}
       ]

       let infoSlide = info.map((info, index) => 
       			<SliderElem key={index} title={info.title} data={info.data} text={info.text}/>
        );

    return (
    	<div className="container">
      <Slider {...settings}>
        {infoSlide}
      </Slider>
      </div>
    );
  }
}

export default SimpleSlider