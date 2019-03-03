import React from 'react'

function MainSection(props) {
  return (
  	<section className={props.cl}>
  		<h2>{props.title}</h2>;
  		{props.children}
  	</section>
  );
}

export default MainSection