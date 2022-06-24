import React, { useState, useEffect, useMemo } from 'react'
import { connect } from "react-redux"
import { useNavigate, useParams, Link } from 'react-router-dom'
import { updateBot } from '../../redux/actions/botActions'
import BotSettings from '../../components/BotSettings'
import IndicatorsList from '../../components/IndicatorsList'
import CandlePattern from '../../components/Indicators/CandlePattern'
import Indicator from '../../components/Indicators/Indicator'
import MovingAverage from '../../components/Indicators/MovingAverage'
import { FaArrowLeft } from "react-icons/fa"

import './styles.css'

const EditBot = ({ dispathUpdateBot, auth, user }) => {
    const { id } = useParams()

    const bot = user?.bots.find(bot => bot.id === id)

    const [loading, setLoading] = useState(false)
    const [openFinal, setOpenFinal] = useState(false)
    const [closeFinal, setCloseFinal] = useState(false)
    const [name, setName] = useState("")
    const [funds, setFunds] = useState(1)
    const [stopLoss, setStopLoss] = useState(1)
    const [exchange, setExchange] = useState("")
    const [ticker, setTicker] = useState("")
    const [timeframe, setTimeframe] = useState("")
    const [modalName, setModalName] = useState("")
    const [modalNameClose, setModalNameClose] = useState("")

    const [openIndicator_01, setOpenIndicator_01] = useState({})
    const [openIndicator_02, setOpenIndicator_02] = useState({})
    const [openIndicator_03, setOpenIndicator_03] = useState({})
    const [openIndicator_04, setOpenIndicator_04] = useState({})
    const [openIndicator_05, setOpenIndicator_05] = useState({})
    const [openIndicator_06, setOpenIndicator_06] = useState({})

    const [closeIndicator_01, setCloseIndicator_01] = useState({})
    const [closeIndicator_02, setCloseIndicator_02] = useState({})
    const [closeIndicator_03, setCloseIndicator_03] = useState({})
    const [closeIndicator_04, setCloseIndicator_04] = useState({})
    const [closeIndicator_05, setCloseIndicator_05] = useState({})
    const [closeIndicator_06, setCloseIndicator_06] = useState({})

    useMemo(() => {
        setName(bot.name);
        setExchange(bot.settings.exchange)
        setTicker(bot.settings.ticker)
        setFunds(bot.settings.funds)
        setStopLoss(bot.settings.stopLoss)
        setTimeframe(bot.settings.timeframe)
        setOpenIndicator_01({
            type: bot.open_logic[0]?.type,
            indicator: bot.open_logic[0]?.indicator,
            conditional: bot.open_logic[0]?.conditional,
            value: bot.open_logic[0]?.value,
            addConditional: bot.open_logic[0]?.addConditional,
            signal: bot.open_logic[0]?.signal
        });
        setOpenIndicator_02({
            type: bot.open_logic[1]?.type,
            indicator: bot.open_logic[1]?.indicator,
            conditional: bot.open_logic[1]?.conditional,
            value: bot.open_logic[1]?.value,
            addConditional: bot.open_logic[1]?.addConditional,
            signal: bot.open_logic[1]?.signal
        })
        setOpenIndicator_03({
            type: bot.open_logic[2]?.type,
            indicator: bot.open_logic[2]?.indicator,
            conditional: bot.open_logic[2]?.conditional,
            value: bot.open_logic[2]?.value,
            addConditional: bot.open_logic[2]?.addConditional,
            signal: bot.open_logic[2]?.signal

        })
        setOpenIndicator_04({
            type: bot.open_logic[3]?.type,
            indicator: bot.open_logic[3]?.indicator,
            conditional: bot.open_logic[3]?.conditional,
            value: bot.open_logic[3]?.value,
            addConditional: bot.open_logic[3]?.addConditional,
            signal: bot.open_logic[3]?.signal

        })
        setOpenIndicator_05({
            type: bot.open_logic[4]?.type,
            indicator: bot.open_logic[4]?.indicator,
            conditional: bot.open_logic[4]?.conditional,
            value: bot.open_logic[4]?.value,
            addConditional: bot.open_logic[4]?.addConditional,
            signal: bot.open_logic[4]?.signal

        })
        setOpenIndicator_06({
            type: bot.open_logic[5]?.type,
            indicator: bot.open_logic[5]?.indicator,
            conditional: bot.open_logic[5]?.conditional,
            value: bot.open_logic[5]?.value,
            addConditional: bot.open_logic[5]?.addConditional,
            signal: bot.open_logic[5]?.signal

        })
        setCloseIndicator_01({
            type: bot.close_logic[0]?.type,
            indicator: bot.close_logic[0]?.indicator,
            conditional: bot.close_logic[0]?.conditional,
            value: bot.close_logic[0]?.value,
            addConditional: bot.close_logic[0]?.addConditional,
            signal: bot.close_logic[0]?.signal

        });
        setCloseIndicator_02({
            type: bot.close_logic[1]?.type,
            indicator: bot.close_logic[1]?.indicator,
            conditional: bot.close_logic[1]?.conditional,
            value: bot.close_logic[1]?.value,
            addConditional: bot.close_logic[1]?.addConditional,
            signal: bot.close_logic[1]?.signal
        })
        setCloseIndicator_03({
            type: bot.close_logic[2]?.type,
            indicator: bot.close_logic[2]?.indicator,
            conditional: bot.close_logic[2]?.conditional,
            value: bot.close_logic[2]?.value,
            addConditional: bot.close_logic[2]?.addConditional,
            signal: bot.close_logic[2]?.signal
        })
        setCloseIndicator_04({
            type: bot.close_logic[3]?.type,
            indicator: bot.close_logic[3]?.indicator,
            conditional: bot.close_logic[3]?.conditional,
            value: bot.close_logic[3]?.value,
            addConditional: bot.close_logic[3]?.addConditional,
            signal: bot.close_logic[3]?.signal
        })
        setCloseIndicator_05({
            type: bot.close_logic[4]?.type,
            indicator: bot.close_logic[4]?.indicator,
            conditional: bot.close_logic[4]?.conditional,
            value: bot.close_logic[4]?.value,
            addConditional: bot.close_logic[4]?.addConditional,
            signal: bot.close_logic[4]?.signal
        })
        setCloseIndicator_06({
            type: bot.close_logic[5]?.type,
            indicator: bot.close_logic[5]?.indicator,
            conditional: bot.close_logic[5]?.conditional,
            value: bot.close_logic[5]?.value,
            addConditional: bot.close_logic[5]?.addConditional,
            signal: bot.close_logic[5]?.signal
        })
    }, []);


    const settings = { exchange, ticker, timeframe, funds, stopLoss }
    const navigate = useNavigate()

    function openBotPayload() {
        let payload = []
        const indicators = [openIndicator_01, openIndicator_02, openIndicator_03, openIndicator_04, openIndicator_05, openIndicator_06]

        for (const item of indicators) {
            !!item.indicator && (payload.push(item))
        }
        return payload
    }

    function closeBotPayload() {
        let payload = []
        const indicators = [closeIndicator_01, closeIndicator_02, closeIndicator_03, closeIndicator_04, closeIndicator_05, closeIndicator_06]

        for (const item of indicators) {
            !!item.indicator && (payload.push(item))
        }
        return payload
    }

    const open_logic = openBotPayload()
    const close_logic = closeBotPayload()

    useEffect(() => {
        for (const item of open_logic) {
            item?.addConditional === "Final" & !!item?.indicator & !!item?.conditional ? setOpenFinal(true) : setOpenFinal(false)
        }
    }, [open_logic])

    useEffect(() => {
        for (const item of close_logic) {
            item?.addConditional === "Final" & !!item?.indicator & !!item?.conditional ? setCloseFinal(true) : setCloseFinal(false)
        }
    }, [close_logic])

    const handleSubmmit = () => {
        setLoading(true)
        dispathUpdateBot(
            name,
            settings,
            open_logic,
            close_logic,
            id,
            () => {
                setLoading(false)
                navigate('/dashboard')
            },
            (error) => {
                setLoading(false)
                console.log(error)
            }
        )
    }

    return (
        <div className='bot'>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                <Link className='bot_details_back_icon' to={`/bot/${id}`}>
                    <FaArrowLeft size={24} />
                </Link>
                <div>
                <p className='bot_details_back_subtitle'>Edit Bot</p>
                    <p className='bot_details_back_title'>{bot.name}</p>
                </div>
            </div>
            <p className='bot_configuration_title'>Configuration</p>
            <BotSettings
                funds={funds}
                setFunds={setFunds}
                stopLoss={stopLoss}
                setStopLoss={setStopLoss}
                name={name}
                setName={setName}
                exchange={exchange}
                setExchange={setExchange}
                ticker={ticker}
                setTicker={setTicker}
                timeframe={timeframe}
                setTimeframe={setTimeframe}
                exchangeList={user.exchanges}
            />
            <p className='bot_configuration_title'>Buy Condition</p>
            <div className='bot_condition_container'>
                <IndicatorsList
                    indicator={openIndicator_01}
                    setIndicator={setOpenIndicator_01}
                    setModalName={setModalName}
                    modalName={modalName}
                />
                {openIndicator_01.type === "ma" ?
                    <MovingAverage indicator={openIndicator_01} setIndicator={setOpenIndicator_01} setNextIndicator={setOpenIndicator_02} />
                    : openIndicator_01.type === "indicator" ?
                        <Indicator indicator={openIndicator_01} setIndicator={setOpenIndicator_01} setNextIndicator={setOpenIndicator_02} />
                        : openIndicator_01.type === "candle" ?
                            <CandlePattern indicator={openIndicator_01} setIndicator={setOpenIndicator_01} setNextIndicator={setOpenIndicator_02} />
                            : null}
            </div>
            {openIndicator_01?.addConditional === "OR" || openIndicator_01?.addConditional === "AND" ?
                <div className="bot_condition_container">
                    <IndicatorsList
                        indicator={openIndicator_02}
                        setIndicator={setOpenIndicator_02}
                        setModalName={setModalName}
                        modalName={modalName}
                    />
                    {openIndicator_02.type === "ma" ?
                        <MovingAverage indicator={openIndicator_02} setIndicator={setOpenIndicator_02} setNextIndicator={setOpenIndicator_03} />
                        : openIndicator_02.type === "indicator" ?
                            <Indicator indicator={openIndicator_02} setIndicator={setOpenIndicator_02} setNextIndicator={setOpenIndicator_03} />
                            : openIndicator_02.type === "candle" ?
                                <CandlePattern indicator={openIndicator_02} setIndicator={setOpenIndicator_02} setNextIndicator={setOpenIndicator_03} />
                                : null}
                </div>
                : null}
            {openIndicator_02?.addConditional === "OR" || openIndicator_02?.addConditional === "AND" ?
                <div className="bot_condition_container">
                    <IndicatorsList
                        indicator={openIndicator_03}
                        setIndicator={setOpenIndicator_03}
                        setModalName={setModalName}
                        modalName={modalName}
                    />
                    {openIndicator_03.type === "ma" ?
                        <MovingAverage indicator={openIndicator_03} setIndicator={setOpenIndicator_03} setNextIndicator={setOpenIndicator_04} />
                        : openIndicator_03.type === "indicator" ?
                            <Indicator indicator={openIndicator_03} setIndicator={setOpenIndicator_03} setNextIndicator={setOpenIndicator_04} />
                            : openIndicator_03.type === "candle" ?
                                <CandlePattern indicator={openIndicator_03} setIndicator={setOpenIndicator_03} setNextIndicator={setOpenIndicator_04} />
                                : null}
                </div>
                : null}
            {openIndicator_03?.addConditional === "OR" || openIndicator_03?.addConditional === "AND" ?
                <div className="bot_condition_container">
                    <IndicatorsList
                        indicator={openIndicator_04}
                        setIndicator={setOpenIndicator_04}
                        setModalName={setModalName}
                        modalName={modalName}
                    />
                    {openIndicator_04.type === "ma" ?
                        <MovingAverage indicator={openIndicator_04} setIndicator={setOpenIndicator_04} setNextIndicator={setOpenIndicator_05} />
                        : openIndicator_04.type === "indicator" ?
                            <Indicator indicator={openIndicator_04} setIndicator={setOpenIndicator_04} setNextIndicator={setOpenIndicator_05} />
                            : openIndicator_04.type === "candle" ?
                                <CandlePattern indicator={openIndicator_04} setIndicator={setOpenIndicator_04} setNextIndicator={setOpenIndicator_05} />
                                : null}
                </div>
                : null}
            {openIndicator_04?.addConditional === "OR" || openIndicator_04?.addConditional === "AND" ?
                <div className="bot_condition_container">
                    <IndicatorsList
                        indicator={openIndicator_05}
                        setIndicator={setOpenIndicator_05}
                        setModalName={setModalName}
                        modalName={modalName}
                    />
                    {openIndicator_05.type === "ma" ?
                        <MovingAverage indicator={openIndicator_05} setIndicator={setOpenIndicator_05} setNextIndicator={setOpenIndicator_06} />
                        : openIndicator_05.type === "indicator" ?
                            <Indicator indicator={openIndicator_05} setIndicator={setOpenIndicator_05} setNextIndicator={setOpenIndicator_06} />
                            : openIndicator_05.type === "candle" ?
                                <CandlePattern indicator={openIndicator_05} setIndicator={setOpenIndicator_05} setNextIndicator={setOpenIndicator_06} />
                                : null}
                </div>
                : null}
            <p className='bot_configuration_title'>Sell Condition</p>
            <div className='bot_condition_container'>
                <IndicatorsList
                    indicator={closeIndicator_01}
                    setIndicator={setCloseIndicator_01}
                    setModalName={setModalNameClose}
                    modalName={modalNameClose}
                />
                {closeIndicator_01.type === "ma" ?
                    <MovingAverage indicator={closeIndicator_01} setIndicator={setCloseIndicator_01} setNextIndicator={setCloseIndicator_02} />
                    : closeIndicator_01.type === "indicator" ?
                        <Indicator indicator={closeIndicator_01} setIndicator={setCloseIndicator_01} setNextIndicator={setCloseIndicator_02} />
                        : closeIndicator_01.type === "candle" ?
                            <CandlePattern indicator={closeIndicator_01} setIndicator={setCloseIndicator_01} setNextIndicator={setCloseIndicator_02} />
                            : null}
            </div>
            {closeIndicator_01?.addConditional === "OR" || closeIndicator_01?.addConditional === "AND" ?
                <div className="bot_condition_container">
                    <IndicatorsList
                        indicator={closeIndicator_02}
                        setIndicator={setCloseIndicator_02}
                        setModalName={setModalNameClose}
                        modalName={modalNameClose}
                    />

                    {closeIndicator_02.type === "ma" ?
                        <MovingAverage indicator={closeIndicator_02} setIndicator={setCloseIndicator_02} setNextIndicator={setCloseIndicator_03} />
                        : closeIndicator_02.type === "indicator" ?
                            <Indicator indicator={closeIndicator_02} setIndicator={setCloseIndicator_02} setNextIndicator={setCloseIndicator_03} />
                            : closeIndicator_02.type === "candle" ?
                                <CandlePattern indicator={closeIndicator_02} setIndicator={setCloseIndicator_02} setNextIndicator={setCloseIndicator_03} />
                                : null}
                </div>
                : null}
            {closeIndicator_02?.addConditional === "OR" || closeIndicator_02?.addConditional === "AND" ?
                <div className="bot_condition_container">
                    <IndicatorsList
                        indicator={closeIndicator_03}
                        setIndicator={setCloseIndicator_03}
                        setModalName={setModalNameClose}
                        modalName={modalNameClose}
                    />
                    {closeIndicator_03.type === "ma" ?
                        <MovingAverage indicator={closeIndicator_03} setIndicator={setCloseIndicator_03} setNextIndicator={setCloseIndicator_04} />
                        : closeIndicator_03.type === "indicator" ?
                            <Indicator indicator={closeIndicator_03} setIndicator={setCloseIndicator_03} setNextIndicator={setCloseIndicator_04} />
                            : closeIndicator_03.type === "candle" ?
                                <CandlePattern indicator={closeIndicator_03} setIndicator={setCloseIndicator_03} setNextIndicator={setCloseIndicator_04} />
                                : null}
                </div>
                : null}
            {closeIndicator_03?.addConditional === "OR" || closeIndicator_03?.addConditional === "AND" ?
                <div className="bot_condition_container">
                    <IndicatorsList
                        indicator={closeIndicator_04}
                        setIndicator={setCloseIndicator_04}
                        setModalName={setModalNameClose}
                        modalName={modalNameClose}
                    />
                    {closeIndicator_04.type === "ma" ?
                        <MovingAverage indicator={closeIndicator_04} setIndicator={setCloseIndicator_04} setNextIndicator={setCloseIndicator_05} />
                        : closeIndicator_04.type === "indicator" ?
                            <Indicator indicator={closeIndicator_04} setIndicator={setCloseIndicator_04} setNextIndicator={setCloseIndicator_05} />
                            : closeIndicator_04.type === "candle" ?
                                <CandlePattern indicator={closeIndicator_04} setIndicator={setCloseIndicator_04} setNextIndicator={setCloseIndicator_05} />
                                : null}
                </div>
                : null}
            {closeIndicator_04?.addConditional === "OR" || closeIndicator_04?.addConditional === "AND" ?
                <div className="bot_condition_container">
                    <IndicatorsList
                        indicator={closeIndicator_05}
                        setIndicator={setCloseIndicator_05}
                        setModalName={setModalNameClose}
                        modalName={modalNameClose}
                    />
                    {closeIndicator_05.type === "ma" ?
                        <MovingAverage indicator={closeIndicator_05} setIndicator={setCloseIndicator_05} setNextIndicator={setCloseIndicator_06} />
                        : closeIndicator_05.type === "indicator" ?
                            <Indicator indicator={closeIndicator_05} setIndicator={setCloseIndicator_05} setNextIndicator={setCloseIndicator_06} />
                            : closeIndicator_05.type === "candle" ?
                                <CandlePattern indicator={closeIndicator_05} setIndicator={setCloseIndicator_05} setNextIndicator={setCloseIndicator_06} />
                                : null}
                </div>
                : null}
            {!!exchange & !!ticker & !!timeframe & !!funds & !!stopLoss & !!name & closeFinal & openFinal ?
                <button className={!loading ? 'bot_crate_button_active' : 'bot_crate_button_active_gray'} disabled={loading ? true : false} onClick={() => handleSubmmit()}>
                    {
                        !loading ? 'Update Bot' : 'Updating...'
                    }
                </button>
                :
                <button className="bot_crate_button_active" style={{ cursor: 'not-allowed' }} disabled>Update Bot</button>
            }

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    dispathUpdateBot: (name, settings, open_logic, close_logic, botId, onSuccess, onError) =>
        dispatch(updateBot({name, settings, open_logic, close_logic }, botId, onSuccess, onError)),
})

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(EditBot)