import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import ExchangeSelect from '../../components/ExchangeSelect'
import { createExchange, deleteExchange } from '../../redux/actions/exchangeActions'
import { getUser } from '../../redux/actions/userActions'
import Tradingrid from '../../assets/images/icon.png'
import Binance from '../../assets/images/binance.png'
import FTX from '../../assets/images/ftx.png'
import { FaTrash } from "react-icons/fa"

import './styles.css'

const Exchange = ({ dispatchCreateExchange, dispatchDeleteExchange, dispatchGetUser, auth, user }) => {

    const [loading, setLoading] = useState(false)
    const [apiKey, setApiKey] = useState("")
    const [secretKey, setSecretKey] = useState("")
    const [exchange, setExchange] = useState({ icon: Binance, name: "Binance" })


    useEffect(() => dispatchGetUser(auth.id),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    const exchangesList = [
        {
            icon: Binance,
            name: "Binance"
        },
        {
            icon: FTX,
            name: "FTX"
        }
    ]

    const handleSubmmit = () => {
        setLoading(true)
        dispatchCreateExchange(
            exchange.name,
            apiKey,
            secretKey,
            auth.id,
            () => {
                setLoading(false)
                dispatchGetUser(auth.id)
                setApiKey("")
                setSecretKey("")
            },
            (error) => {
                setLoading(false)
                console.log(error)
            }
        )
    }

    const handleDelete = (exchangeId) => {
        dispatchDeleteExchange(
            exchangeId,
            () => {
                dispatchGetUser(auth.id)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    return (
        <div className='exchanges'>
            <div>
                <h2 className='exchanges_title'>Exchange</h2>
                <p className='exchanges_subtitle'>To use the trading bot feature, you need to connect your exchange through API keys.</p>
            </div>

            <p className='exchange_configuration_title'>Autentication</p>
            <div className='exchanges_form'>
                <ExchangeSelect
                    exchange={exchange}
                    setExchange={setExchange}
                    exchangesList={exchangesList}
                    initial={exchangesList[0]}
                />
                <div className="input_container" style={{ width: 380 }}>
                    <p className="input_label">API Key</p>
                    <input className="input_field" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
                </div>
                <div className="input_container" style={{ width: 380 }}>
                    <p className="input_label">Secret Key</p>
                    <input className="input_field" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />
                </div>


                {!!apiKey & !!secretKey ?
                    <button className={!loading ? 'exchanges_form_button' : 'exchanges_form_button_gray'} disabled={loading ? true : false} onClick={() => handleSubmmit()}>
                        {
                            !loading ? 'Connect Exchange' : 'Conecting...'
                        }
                    </button>
                    :
                    <button className="exchanges_form_button_disabled" disabled>Connect Exchange</button>
                }

            </div>

            <p className='exchange_configuration_title'>Exchanges Connected</p>
            <div className="exchange_connected_card">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Tradingrid} alt="Demo Exchange" style={{ width: 40, height: 40, borderRadius: 3 }} />
                    <div style={{ marginLeft: 15 }}>
                        <p className="card_market_price_converted">Exchange</p>
                        <p className="card_market_price">Testnet</p>
                    </div>
                </div>
                <div>
                    <p className="card_market_price_converted">API Key</p>
                    <p className="card_market_price">trdg..tNeT</p>
                </div>
                <div>
                    <p className="card_market_price_converted">Status</p>
                    <p className="card_market_price">Connected</p>
                </div>
                <div className="exchange_connected_card_icon">
                <div className='exchange_connected_card_icon_container'>
                        <FaTrash color='rgba(255,255,255,0.3)' size={15} style={{ cursor: 'not-allowed' }} />
                    </div>
                </div>
            </div>

            <React.Fragment>
                {user.exchanges.map((item) => (
                    <div key={item.id} className="exchange_connected_card">
                        <div>
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='exchange_select_logo_container'>
                                    <img src=
                                        {item.exchange === 'Binance' ? Binance
                                            : item.exchange === 'FTX' ? FTX : null}
                                        alt={item.exchange === 'Binance' ? 'Binance'
                                            : item.exchange === 'FTX' ? 'FTX' : 'null'}
                                        className="exchange_select_logo" />
                                </div>
                                <div style={{ marginLeft: 5 }}>
                                    <p className="card_market_price_converted">Exchange</p>
                                    <p className="card_market_price">{item.exchange}</p>
                                </div>
                            </span>
                        </div>
                        <div>
                            <p className="card_market_price_converted">API Key</p>
                            <p className="card_market_price">{item.api_key.slice(0, 4) + ".." + item.api_key.slice(5, 9)}</p>
                        </div>
                        <div>
                            <p className="card_market_price_converted">Status</p>
                            <p className="card_market_price">Connected</p>
                        </div>
                        <div className="exchange_connected_card_icon">
                            <div className='exchange_connected_card_icon_container'>
                                <FaTrash color='rgba(255, 255, 255, 0.8)' size={15} onClick={() => handleDelete(item.id)} />
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        </div>


    )
}

const mapDispatchToProps = (dispatch) => ({
    dispatchGetUser: (id) =>
        dispatch(getUser(id)),
    dispatchCreateExchange: (exchange, api_key, secret_key, user, onSuccess, onError) =>
        dispatch(createExchange({ exchange, api_key, secret_key, user }, onSuccess, onError)),
    dispatchDeleteExchange: (exchangeId, onSuccess, onError) =>
        dispatch(deleteExchange(exchangeId, onSuccess, onError)),
})

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Exchange)