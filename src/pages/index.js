import React from 'react'
import { withSiteData } from 'react-static'

import Banner from '../components/banner.js'
import AboutComp from '../components/aboutComp.js'
import MainSection from '../components/main-section.js'
import SimpleSlider from '../components/slider.js'

import '../components/components-style/scss/main.scss'
import '../components/components-style/scss/bootstrap.scss'



export default withSiteData(() => (
	<div>
  	<Banner/>
	  	<MainSection title="О нас" cl="main_section pb-0">
	  		<AboutComp/>
  	</MainSection>
  	<MainSection title="Новости" cl="main_section">
	  		<SimpleSlider/>
  	</MainSection>
  </div>
))
