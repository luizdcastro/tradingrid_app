import React from 'react'
import CardMarket from '../../components/CardMarket'
import { FaThList } from "react-icons/fa"
import One from '../../assets/images/0.png'
import Two from '../../assets/images/1.png'


import './styles.css'

const Marketplace = () => {
    return (
        <div className='marketplace'>
            <div>
                <h2 className='marketplace_title'>Marketplace</h2>
                <p className='marketplace_subtitle'>Publish your custom trading bot to earn extra income, or subscribe to your favorite strategies.</p>
            </div>
            <div className='marketplace_header'>
                <div className='marketplace_header_numbers_container'>
                    <p className='marketplace_header_numbers_text'>2</p>
                    <p className='marketplace_header_numbers_text'>Bots</p>
                </div>
                <div className='marketplace_header_select'>
                    <select className='marketplace_header_select_input'>
                        <option>Latest</option>
                        <option>Highest Price</option>
                        <option>Lowest Price</option>
                    </select>
                    <div className='marketplace_header_icon_container'>
                        <FaThList size={20} />
                    </div>
                </div>
            </div>
            <CardMarket image={One}/>
            <CardMarket image={Two}/>

        </div>
    )
}

export default Marketplace