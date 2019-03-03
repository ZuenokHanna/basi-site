import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'

import logo from './components-style/img/logo.png';

function Logo() {
  return (
  	
				<Link to="/" className="navbar-brand">
					<img src={logo} alt=""></img>
				</Link>
  )
}

export default Logo