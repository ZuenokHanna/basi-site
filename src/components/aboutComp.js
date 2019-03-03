import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'

class AboutComp extends React.Component {
    render() {
    
        let texts = [
            {
                text: "Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.",
                bg: "#9b9b9b"
            },
            {
                text: "Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.",
                bg: "#bebebe"
            },
            {
                text: "Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.",
                bg: "#cecece"
            },
            {
                text: "Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.",
                bg: "#aeaeae"
            }
        ];

        let text = texts.map((item, index) => 
            <div key={index} className="about_component__text col-md-6 d-flex align-items-center">
                <p>{item.text}</p>
            </div>
        );

        let bgDiv = texts.map((item, index) => 
            <div key={index} style={{backgroundColor: item.bg}}></div>
        );


        return (

        	<div className="about_component">
                <div className="container">
                    <div className="row d-flex flex-wrap">
                        {text}
                    </div>
                </div>
                <div className="about_component__after">
                    {bgDiv}
                </div>
            </div>

        	);
       
    } 
}

export default AboutComp;