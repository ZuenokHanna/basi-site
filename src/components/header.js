import React from 'react'

import Nav from './nav'

class Header extends React.Component {
   render() {
      return (
         <header className="default-header">
            <Nav/>
         </header>
      );
   }
}

export default Header