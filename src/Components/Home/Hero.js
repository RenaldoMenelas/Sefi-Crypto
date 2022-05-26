import React from 'react'
import './Hero.css'
import Laptop from  '../../images/hero-img.png'
const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-leftside">
            <p>
               buy & sell Crypto 24/7 using your retirement account
            </p>
            <h1> Invest in Cryptocurrency with your IRA</h1>
            <p>
                buy, sell, and store hundreds of Cryptocurrencies
            </p>
         
            <label for="email" ></label>
                <input className="email" type="email" placeholder=" Enter Your Email" />
                <button>Learn More</button>
                
            </div>
     
            <div className="hero-rightside" >
                <img src={Laptop} alt="laptop"/>

            </div>
        </div>
    )
}

export default Hero
