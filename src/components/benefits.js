import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'

class Benefits extends React.Component {
    render() {
    
        let data = [
            {
                num: "2,5 года",
                descr: "успешных проектов"
            },
            {
                num: "2,5 года",
                descr: "успешных проектов"
            },
            {
                num: "2,5 года",
                descr: "успешных проектов"
            },
            {
                num: "2,5 года",
                descr: "успешных проектов"
            },
            {
                num: "2,5 года",
                descr: "успешных проектов"
            }
        ];

        let items = data.map((item, index) => 
            <div key={index} className="benefits__element text-center">
            <p className="benefits__number">{item.num}</p>
            <p className="benefits__title">{item.descr}</p>
        </div>
        );

        return (

        	<div className="benefits d-flex justify-content-between">{items}</div>

        	);
       
    } 
}

export default Benefits;