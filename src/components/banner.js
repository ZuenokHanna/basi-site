import React from 'react'

import Benefits from './benefits.js'

import './components-style/scss/main.scss'
import './components-style/scss/bootstrap.scss'


class Banner extends React.Component {
   render() {
      return (
         	<section className="home-banner-area relative" id="home" data-parallax="scroll" data-image-src="img/header-bg.jpg">
						<div className="overlay-bg overlay"></div>
						<h1 className="template-name">arclabs</h1>
						<div className="container">
							<div className="row fullscreen">
								<div className="banner-content col-lg-12">
									<h1>
										Разаработка, тестирование и поддржка ...
									</h1>
									<Benefits/>
								</div>
							</div>
						</div>
					</section>
      );
   }
}

export default Banner