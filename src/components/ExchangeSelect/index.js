import React, { useState, useEffect, useRef } from 'react';
import {IoClose, IoChevronDownOutline} from 'react-icons/io5'

import './styles.css'

const ExchangeSelect = ({ exchange, setExchange, exchangesList }) => {
    const [open, setOpen] = useState(false)

    let menuRef = useRef()

    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                setOpen(false)
            }
        };

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    return (
        <div ref={menuRef}>
            <div className="exchange_select_container" onClick={() => setOpen(!open)} >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='exchange_select_logo_container'>
                        <img src={exchange.icon} alt={exchange.name} className="exchange_select_logo" />
                    </div>
                    <p className="exchange_option_title">{exchange.name}</p>
                </div>
                <div>
                    {open ?
                        <IoClose  size={23} style={{ marginRight: 4, marginTop: 8, cursor: 'pointer' }} /> :
                        <IoChevronDownOutline size={23} style={{ marginRight: 4, marginTop: 8, cursor: 'pointer' }} />}
                </div>
            </div>
            {open && (
                <div className="exchange_option_container">
                    {exchangesList.map((item) => (
                        <button key={item.name} className="exchange_select_container_option" onClick={() => { setExchange({ icon: item.icon, name: item.name }); setOpen(!open) }}>
                            <div className='exchange_select_logo_container'>
                                <img src={item.icon} alt={item.name} className="exchange_select_logo" />
                            </div>
                            <p className="exchange_option_title">{item.name}</p>
                        </button>
                    ))}
                </div>
            )}
        </div>

    );
};


export default ExchangeSelect