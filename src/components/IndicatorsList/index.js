import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { FaTimes, FaSearch } from "react-icons/fa"
import {IoClose} from 'react-icons/io5'
import { indicatorsList } from '../../assets/data'

import './styles.css'

const IndicatorsList = ({ indicator, modalName, setModalName, setIndicator }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [activeMenu, setActiveMenu] = useState("indicator")
    const [data, setData] = useState([])

    useEffect(() => {
        setData(
            indicatorsList.filter((item) =>
                (item.type?.toLowerCase().includes(activeMenu)) &&
                (item.label?.toLowerCase().includes(search.toLocaleLowerCase())))
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, activeMenu])

    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div>
            <div className="indicator_list_input_container">
                <p className="indicator_list_input_label">Indicator</p>
                <button
                    className='indicator_list_input_field'
                    onClick={openModal}>
                    {indicator.indicator}
                </button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="indicator_list_modal"
                overlayClassName="indicator_list_modal_overlay">
                <div className='indicator_list_modal_header'>
                    <p className='indicator_list_modal_title'>Select your indicator</p>
                    <IoClose className='indicator_list_modal_close' onClick={closeModal} />
                </div>
                <div className='indicator_list_modal_search_container'>
                    <FaSearch className="indicator_list_modal_search_icon" />
                    <input
                        onChange={e => { setSearch(e.target.value) }}
                        className="indicator_list_modal_search_input"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div className="indicator_list_header">
                    <p className={activeMenu === 'indicator' ? 'indicator_list_col_active' : 'indicator_list_col_inactive'}
                        onClick={() => { setActiveMenu('indicator') }}>Indicators</p>
                    <p className={activeMenu === 'ma' ? 'indicator_list_col_active' : 'indicator_list_col_inactive'}
                        onClick={() => { setActiveMenu('ma') }}>Moving Averages</p>
                    <p className={activeMenu === 'candle' ? 'indicator_list_col_active' : 'indicator_list_col_inactive'}
                        onClick={() => { setActiveMenu('candle') }}>Candle Patterns</p>
                </div>
                <div className="indicator_list_content">
                    {data.map((item) => (
                        <button
                            className="indicator_list_modal_button"
                            key={item.label}
                            onClick={() => {
                                setIndicator({ indicator: item.label, type: item.type, signal: true });
                                setModalName("")
                                setModalIsOpen(false)
                            }}>
                            {item.label}
                        </button>

                    ))}
                </div>
            </Modal>
        </div>
    )
}


export default IndicatorsList



