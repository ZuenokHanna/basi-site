import React from 'react'

function SliderElem(props) {
  return (
  	<div className="slider-elem">
  		// <img src={props.image}  />
  		<span className="slider-elem__data">{props.data}</span>
  		<div className="slider-elem__descr">
  			<div className="slider-elem__title">
  				{props.title}
  			</div>
  			<p>{props.text}</p>
  		</div>
  	</div>
  );
}

export default SliderElem