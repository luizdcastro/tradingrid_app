import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'

require('./styles.css')

const WalletSmall = () => {
    const { publicKey } = useWallet()


    return (
        <WalletModalProvider>
            <WalletMultiButton>
                {!publicKey && 'Connect Wallet'}                             
            </WalletMultiButton>
        </WalletModalProvider>
    )
}

export default WalletSmall