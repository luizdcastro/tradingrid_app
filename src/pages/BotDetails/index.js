import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { getUser } from '../../redux/actions/userActions'
import { deleteBot, updateBot } from '../../redux/actions/botActions'
import { useParams, Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { AreaChart, Area, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts'
import { FaPause, FaPen, FaTrash, FaArrowLeft, FaPlay } from "react-icons/fa"
import One from '../../assets/images/0.png'
import './styles.css'

const Dashboard = ({ user, auth, dispatchGetUser, dispatchDeleteBot, dispatachUpdateBot }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    let moment = require('moment')
    const [data, setData] = useState([
        {
            profit: 0,
            percent: 0
        }
    ])

    useEffect(() => dispatchGetUser(auth.id),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    const handleDelete = () => {
        dispatchDeleteBot(
            id,
            () => {
                dispatchGetUser(auth.id)
                navigate('/dashboard')
            },
            (error) => {
                console.log(error)
            }
        )
    }

    const handleUpdate = (active) => {
        dispatachUpdateBot(
            active,
            id,
            () => {
                dispatchGetUser(auth.id)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    const bot = user?.bots.find(bot => bot.id === id)
    const orders = user?.orders.filter(order => order.bot === id)

    useEffect(() => {
        let listOfOrders = []
        for (const order of orders) {
            listOfOrders.push({
                profit: order.profit,
                percent: order.percent
            })
        }
        if (listOfOrders.length) {
            setData(listOfOrders)
        }

    }, [])

    console.log(data)

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label_profit">{`$${payload[0].payload.profit.toFixed(2)}`}</p>
                    <p className="label_percent">{`${payload[0].payload.percent.toFixed(2)}%`}</p>
                </div>
            )
        }
        return null
    }

    return (
        <div className='bot_details'>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
                <Link className='bot_details_back_icon' to="/dashboard">
                    <FaArrowLeft size={24} />
                </Link>
                <div>
                    <p className='bot_details_back_subtitle'>Bot Details</p>
                    <p className='bot_details_back_title'>{bot.name}</p>
                </div>
            </div>
            <div className='bot_details_settings'>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', flex: 1.25 }}>
                        <img src={One} alt="bot" className={bot.active ? 'bot_details_settings_image' : 'bot_details_settings_image_inactive'} />
                    </div>
                </div>
                <div className='bot_details_settings_information'>
                    <div className='bot_details_settings_information_container'>
                        <div style={{ flex: 1 }}>
                            <p className='bot_details_settings_subtitle'>Exchange</p>
                            <p className='bot_details_settings_title'>{bot.settings.exchange}</p>
                        </div>
                        <div style={{ flex: 1 }}>
                            <p className='bot_details_settings_subtitle'>Ticker</p>
                            <p className='bot_details_settings_title'>{bot.settings.ticker}</p>
                        </div>
                        <div style={{ flex: 1 }}>
                            <p className='bot_details_settings_subtitle'>Status</p>
                            <p className='bot_details_settings_title'>{bot.active ? 'Active' : 'Inactive'}</p>
                        </div>
                    </div>
                    <div className='bot_details_settings_information_container'>
                        <div style={{ flex: 1 }}>
                            <p className='bot_details_settings_subtitle'>Created</p>
                            <p className='bot_details_settings_title'>{moment(bot.createdAt).format("DD-MM-YY hh:mm A")}</p>
                        </div>
                        <div style={{ flex: 1 }}>
                            <p className='bot_details_settings_subtitle'>Triggered</p>
                            <p className='bot_details_settings_title'>{orders.length}</p>
                        </div>
                        <div style={{ flex: 1 }}>
                            <p className='bot_details_settings_subtitle'>Growth</p>
                            <p className='bot_details_settings_title'>{bot.growth.toFixed(2)}%</p>
                        </div>
                    </div>
                </div>
                <div className='bot_details_settings_actions'>
                    {bot.active ?
                        <div className='bot_details_settings_icon_container' onClick={() => handleUpdate(false)} >
                            <FaPause className='bot_details_settings_icon' />
                        </div> :
                        <div className='bot_details_settings_icon_container' onClick={() => handleUpdate(true)} >
                            <FaPlay className='bot_details_settings_icon' />
                        </div>
                    }

                    <div className='bot_details_settings_icon_container' onClick={() => navigate(`/edit-bot/${id}`)}>
                        <FaPen className='bot_details_settings_icon' />
                    </div>
                    <div className='bot_details_settings_icon_container' style={{ marginBottom: 0 }} onClick={() => handleDelete()} >
                        <FaTrash className='bot_details_settings_icon' />
                    </div>
                </div>

            </div>
            <p className='exchange_configuration_title'>Performance</p>
            <div className='bot_details_performance'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                        <Tooltip cursor={true} content={<CustomTooltip />} stroke="rgba(255, 255, 255, 0.8)" />
                        <Area type="monotone" dataKey="profit" stroke="#4e44ce" fill="rgba(78, 68, 206, 0.85)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <p className='exchange_configuration_title'>History</p>

            {orders.length ?
                orders.map((item) => (
                    <div className="card_market_container" key={item.id}>
                        <div style={{ display: 'flex' }}>
                            <div className='order_card_label'>
                                <p className='order_card_label_text'>Order</p>
                            </div>
                            <div>
                                <p className='order_card_title'>Status</p>
                                <p className='order_card_value'>{item.active ? "Open" : "Closed"}</p>
                            </div>
                        </div>
                        <div>
                            <p className='order_card_title'>Open Time</p>
                            <p className='order_card_value'>{moment(item.open_time).format("MM-DD-YY hh:mm A")}</p>
                        </div>
                        <div>
                            <p className='order_card_title'>Buy Price</p>
                            <p className='order_card_value'>{item.buy_price?.toFixed(2)}</p>
                        </div>
                        <div>
                            <p className='order_card_title'>Close Time</p>
                            <p className='order_card_value'>{item.close_time && (moment(item.close_time).format("MM-DD-YY hh:mm A"))}</p>
                        </div>
                        <div>
                            <p className='order_card_title'>Sell Price</p>
                            <p className='order_card_value'>{item.sell_price?.toFixed(2)}</p>
                        </div>
                        <div>
                            <p className='order_card_title'>Quantity</p>
                            <p className='order_card_value'>{item.quantity?.toFixed(2)}</p>
                        </div>
                        <div>
                            <p className='order_card_title'>Growth</p>
                            <p className='order_card_value'>{!!item.percent || item.percent === 0 ? item.percent?.toFixed(2) + "%" : ""}</p>
                        </div>
                        <div>
                            <p className='order_card_title'>Profit</p>
                            <p className='order_card_value'>{!!item.profit || item.percent === 0 ? "$" + item.profit.toFixed(2) : ""}</p>
                        </div>
                    </div>
                ))
                :
                <div style={{ marginTop: 15 }}>
                    <p className='no_results_title'>No results found</p>
                    <p className='no_results_subtitle'>No orders or events have been created yet.</p>
                </div>
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    dispatchGetUser: (id) =>
        dispatch(getUser(id)),
    dispatchDeleteBot: (botId, onSuccess, onError) =>
        dispatch(deleteBot(botId, onSuccess, onError)),
    dispatachUpdateBot: (active, botId, onSuccess, onError) =>
        dispatch(updateBot({ active }, botId, onSuccess, onError)),

})

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)