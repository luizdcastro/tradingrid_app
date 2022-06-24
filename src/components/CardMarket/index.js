import React from "react"

import './styles.css'

const CardMarket = ({ image }) => {
    return (
        <div className="card_market_container">
            <div>
                <img src={image} alt="bot" className="card_market_image" />
            </div>
            <div>
            </div>
            <div>
                <p className="card_market_price">Ξ 2 SOL</p>
                <p className="card_market_price_converted">$63</p>
            </div>
            <div>
                <button className="card_market_button">Buy Now</button>
            </div>

        </div>
    )
}

export default CardMarket