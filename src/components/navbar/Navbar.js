import React, { useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes, FaCottonBureau } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <FaCottonBureau className='icon' />
                    <h3>Beauty By Evans</h3>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/services'>Services</Link> </li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <button>Book Now</button>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
