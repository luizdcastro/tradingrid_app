import React from 'react'
import { symbolsList, timeframeList } from '../../assets/data'
import InputRange from '../InputRange'
import Input from '../Input'
import Select from '../Select'

import './styles.css'

const BotSettings = ({
    funds,
    setFunds,
    stopLoss,
    setStopLoss,
    name,
    setName,
    exchange,
    exchangeList,
    setExchange,
    ticker,
    setTicker,
    timeframe,
    setTimeframe
}) => {
    return (
        <div className='bot_settings_setup_form'>
            <Input
                label="Name"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                maxlength={12}
            />
            <Select
                label="Exchange"
                value={exchange}
                onChange={(e) => { setExchange(e.target.value) }}
            >
                <option>Testnet</option>
                {exchangeList?.map((item) => (
                    <option key={item.id} value={item.exchange}>{item.exchange}</option>
                ))}
            </Select>
            <Select
                label="Ticker"
                value={ticker}
                onChange={(e) => { setTicker(e.target.value) }}
            >
                {symbolsList.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Select>
            <Select
                label="Timeframe"
                value={timeframe}
                onChange={(e) => { setTimeframe(e.target.value) }}
            >
                {timeframeList.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Select>
            <InputRange
                label="Alocation Funds"
                value={funds}
                onChange={(e) => setFunds(parseInt(e.target.value))}
                step="0.5"
                symbol={"%"}
                max={100}
                min={0.5}
            />
            <InputRange
                label="Stop Loss"
                inputLabel={"Stop Loss"}
                value={stopLoss}
                onChange={(e) => setStopLoss(parseInt(e.target.value))}
                step="0.5"
                symbol={"%"}
                max={100}
                alowOff={true}
            />
        </div>
    )
}

export default BotSettings