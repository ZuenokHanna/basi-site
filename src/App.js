import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'

import Header from './components/header'

import './components/components-style/scss/main.scss'
import './components/components-style/scss/bootstrap.scss'

function App() {
  return (
    <Root>
      <Header/>
      <div className="content">
        <Routes />
      </div>
    </Root>
  )
}

export default App
