import React from 'react'
import './FeaturedCoins.css'
const FeaturedCoins = () => {
    return (
        
        <div className="FeaturedCoins">
            <div className="left-side">
                <h2> Explore top crypto's like<br/> Bitcoin, Etherum, and<br/> DogeCoin </h2>
                <p>see all available assets: Cryptocurrencies and NFT's</p>
                <button>See More Coins</button>
            </div>
            
            <div className="right-side">
                <div className="first-row">  
                <div>1</div>
                <div>2</div>
                <div>3</div>
                </div>
                <div className="second-row">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                </div>
                
            </div>
        </div>
    )
}

export default FeaturedCoins
