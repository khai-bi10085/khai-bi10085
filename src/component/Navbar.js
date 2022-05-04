import React, { useState } from 'react'
import Logo from '../Image/logo.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link, Router, Routes } from 'react-router-dom';
function Navbar() {

    const [openOrder, setOpenOrder] = useState(false);

    const toggleNavbar = () => {
        setOpenOrder(!openOrder);
    }


    return (
        <div className='navbar'>
            <div className='leftSide' id={openOrder ? 'open' : 'close'}>
                <Link to='/'>
                    <img src={Logo} />
                </Link>


                <div className='hiddenLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/creat'>Create</Link>
                    <Link to='/knowledge'>Knowledge</Link>
                </div>
            </div>


            <div className='rightSide'>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
                <Link to='/create'> Create</Link>
                <Link to='/knowledge'>Knowledge</Link>

                {/* <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
                <div className='search'>
                    <div className='searchInputs'>
                        <input type='text' placeholder='Search...' />

                    </div>

                </div> */}


            </div>

        </div>
    )
}

export default Navbar