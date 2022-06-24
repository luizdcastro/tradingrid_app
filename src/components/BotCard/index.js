import React from "react"
import { Link } from "react-router-dom"

import './styles.css'

const BotCard = ({ image, name, growth, profit, status, bot_id }) => {
    
    return (
        <div className="card_market_container">
            <div style={{ display: 'flex', alignItems: 'center', flex: 1.25 }}>
                <img src={image} alt="bot" className={status ? 'card_market_image' : 'card_market_image_inactive'} />
                <div style={{ marginLeft: 10 }}>
                    <p className="card_market_price_converted">Name</p>
                    <p className="card_market_price">{name}</p>
                </div>
            </div>
            <div style={{ flex: 1 }}>
                <p className="card_market_price_converted">Status</p>
                <p className="card_market_price">{status ? 'Active' : 'Inactive'}</p>
            </div>
            <div style={{ flex: 1 }}>
                <p className="card_market_price_converted">Growth</p>
                <p className="card_market_price">{growth}%</p>
            </div>
            <div style={{ flex: 1 }}>
                <p className="card_market_price_converted">Profit</p>
                <p className="card_market_price">${profit}</p>
            </div>
            <div style={{ flex: 0 }}>
                <Link className="card_market_button" to={`/bot/${bot_id}`}>Details</Link>
            </div>

        </div>
    )
}

export default BotCard