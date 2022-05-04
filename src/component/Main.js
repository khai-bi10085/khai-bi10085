import React from 'react'
import Footers from '../footer/Footers'
import Navbar from './Navbar'

function Main(props) {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footers />
        </div>
    )
}

export default Main