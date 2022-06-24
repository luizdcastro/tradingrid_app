import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { FaTwitter, FaTelegram, FaMedium, FaGlobe, FaServer, FaLock, FaBox, FaChartArea, FaUikit } from "react-icons/fa"
import Wallet from '../Wallet'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import { getUser } from '../../redux/actions/userActions'
import Logo from '../../assets/images/logo.png'
import Solana from '../../assets/images/solana.png'

import { connect } from "react-redux"
import { auth, logoutUser } from '../../redux/actions/authActions'

import './styles.css'

const Drawer = ({ dispatchAuth, dispatchLogout, dispatchGetUser }) => {
    const [path, setPath] = useState("/dashboard")
    const location = useLocation()
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        setPath(location.pathname)
    }, [location.pathname])

    const { publicKey, connected } = useWallet()
    const { connection } = useConnection()

    useEffect(() => {
        if (connected) {
            dispatchAuth(
                publicKey.toString(),
                (response) => dispatchGetUser(response.id),
                (error) => console.log(error)
            )
        } else {
            dispatchLogout()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connected, publicKey])

    const getBalance = async () => {
        if (connected) {
            const balance = await connection.getBalance(publicKey)
            setBalance(parseInt(balance).toExponential(5).slice(0, 7))
        }
    }

    useEffect(() => {
        getBalance()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connected])

    return (
        <div className='drawer'>
            <div className='header'>
                <img src={Logo} alt="logo" className='header_logo' />
                <div className='header_wallet_container'>
                    <Wallet />
                    {connected &&
                        <div className='header_balance'>
                            <p className='header_balance_value'>{balance}</p>
                            <div className='header_solana_container'>
                                <img src={Solana} alt="solana" className="header_solana_logo" />
                            </div>
                        </div>
                    }
                </div>
            </div>
            <nav className='drawer_main_menu_itens'>
                <Link to="/dashboard" className='drawer_menu_item'>
                    <FaChartArea size={22} className={
                        path === '/dashboard' || path.startsWith('/bot') || path.startsWith('/edit') ?
                            'drawer_menu_item_icon_active' : 'drawer_menu_item_icon_inactive'} />
                    <p className={
                        path === '/dashboard' || path.startsWith('/bot') || path.startsWith('/edit') ?
                            'drawer_menu_item_name_active' : 'drawer_menu_item_name_inactive'}>Dashboard</p>
                </Link>
                <Link to="/trading-bot" className='drawer_menu_item'>
                    <FaServer size={22} className={path === '/trading-bot' ? 'drawer_menu_item_icon_active' : 'drawer_menu_item_icon_inactive'} />
                    <p className={path === '/trading-bot' ? 'drawer_menu_item_name_active' : 'drawer_menu_item_name_inactive'}>Trading Bot</p>
                </Link>
                <Link to="/exchange" className='drawer_menu_item'>
                    <FaLock size={22} className={path === '/exchange' ? 'drawer_menu_item_icon_active' : 'drawer_menu_item_icon_inactive'} />
                    <p className={path === '/exchange' ? 'drawer_menu_item_name_active' : 'drawer_menu_item_name_inactive'}>Exchange</p>
                </Link>
                {/*
                <Link to="/marketplace" className='drawer_menu_item'>
                    <FaBox size={20} className={path === '/marketplace' ? 'drawer_menu_item_icon_active' : 'drawer_menu_item_icon_inactive'} />
                    <p className={path === '/marketplace' ? 'drawer_menu_item_name_active' : 'drawer_menu_item_name_inactive'}>Marketplace</p>
                </Link>
                <Link to="/minting" className='drawer_menu_item'>
                    <FaUikit size={20} className={path === '/minting' ? 'drawer_menu_item_icon_active' : 'drawer_menu_item_icon_inactive'} />
                    <p className={path === '/minting' ? 'drawer_menu_item_name_active' : 'drawer_menu_item_name_inactive'}>Minting NFT</p>
                </Link> 
                    */}
            </nav>
            <nav className='drawer_main_menu_itens'>
                <div className='drawer_menu_footer'>
                    <a href="http://localhost:3000/">
                        <FaGlobe size={21} className="drawer_menu_footer_icon" />
                    </a>
                    <a href="http://localhost:3000/">
                        <FaMedium size={21} className="drawer_menu_footer_icon" />
                    </a>
                    <a href="http://localhost:3000/">
                        <FaTwitter size={21} className="drawer_menu_footer_icon" />
                    </a>
                    <a href="http://localhost:3000/">
                        <FaTelegram size={21} className="drawer_menu_footer_icon" />
                    </a>
                </div>
            </nav>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    dispatchGetUser: (id) =>
        dispatch(getUser(id)),
    dispatchAuth: (wallet, onSuccess, onError) =>
        dispatch(auth(wallet, onSuccess, onError)),
    dispatchLogout: () => dispatch(logoutUser()),
})

export default connect(null, mapDispatchToProps)(Drawer)