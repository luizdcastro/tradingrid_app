import React, { useMemo } from 'react'
import { Routes, Route, Navigate  } from "react-router-dom"
import { connect } from "react-redux"

import Drawer from "../components/Drawer"
import Dashboard from "../pages/Dashboard"
import Bot from "../pages/Bots"
import EditBot from '../pages/EditBot'
import BotDetails from "../pages/BotDetails"
import Exchange from "../pages/Exchange"
import PublicApi from "../pages/PublicApi"
import Marketplace from "../pages/Marketplace"
import Minting from "../pages/Minting"
import Connect from '../pages/Connect'

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
    GlowWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter
} from '@solana/wallet-adapter-wallets'
import { LedgerWalletAdapter } from '@solana/wallet-adapter-ledger'

import { clusterApiUrl } from '@solana/web3.js'

const App = ({ auth }) => {

    const network = WalletAdapterNetwork.Devnet

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
            new LedgerWalletAdapter()
        ],
        [network]
    )

    return (
        <React.Fragment>
            <div className="App">
                <ConnectionProvider endpoint={endpoint}>
                    <WalletProvider wallets={wallets} autoConnect>
                        <Drawer />
                        {auth.connected ? (
                            <Routes>
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/marketplace" element={<Marketplace />} />
                                <Route path="/trading-bot" element={<Bot />} />
                                <Route path="/bot/:id" element={<BotDetails />} />
                                <Route path="/edit-bot/:id" element={<EditBot />} />
                                <Route path="/public-api" element={<PublicApi />} />
                                <Route path="/exchange" element={<Exchange />} />
                                <Route path="/minting" element={<Minting />} />
                                <Route path="/connect" element={<Navigate replace to="/dashboard" />} />
                            </Routes>
                        ) : (
                            <Routes>
                                <Route path="/connect" element={<Connect />} />
                                <Route path="*" element={<Navigate replace to="/connect" />} />
                            </Routes>
                        )}
                    </WalletProvider>
                </ConnectionProvider>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps)(App)