import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'

import Logo from './logo.js'

function Nav() {
  return (

	<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container">
				<Logo/>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="fa fa-bars"></span>
				</button>

				<div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li><Link to="/about">Новости</Link></li>
						<li><Link to="/blog">Вакансии</Link></li>
						<li><Link to="/about">Обучение</Link></li>
						<li><Link to="/blog">Контакты</Link></li>
					</ul>
				</div>
			</div>
		</nav>
  )
}

export default Nav