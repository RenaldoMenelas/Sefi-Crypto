import React from 'react'
import {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(!clicked)
    return (
        <div className="header">
            <h1>Se <span>Fi</span></h1>
            <ul className={clicked ? 'nav-ul active' : 'nav-ul unactive' }>
            <li>
                <a href="/">Home</a> 
            </li>
            <li>
                <a href="/">Featured</a>
            </li>
            <li>
                <a href="/">Earn</a>
            </li>
            <li>
                <a href="/">Contact</a>
            </li>
            </ul>

            <button className="btn">Connect Wallet</button>
   
            <div className="hamburger-menu" onClick={handleClick} > {clicked ? <FaTimes /> : <FaBars style={{color: '#333'}}/>} </div>
         

        </div>
    )
}

export default Navbar

