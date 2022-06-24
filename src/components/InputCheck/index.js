import React from 'react';
import * as IoIcons from "react-icons/io5"

import './styles.css'

const InputCheck = ({ checked, onChange }) => {
    return (
        <div className="custom-input_container">
            <div className="custom-input_label-container" style={{position: 'relative'}}>
                <p className="custom-input_label">Gatilho</p>
                <button style={{ backgroundColor: 'transparent', border: 'none', position: 'absolute', top: -4, right: 0 }}>
                    <IoIcons.IoInformationCircleSharp size={20} color='#bb86fc' />
                </button>
            </div>          
            <div className="input-range_container">
               
                <p>Aguardar novo sinal</p>

            </div>
        </div>
    );
};

export default InputCheck