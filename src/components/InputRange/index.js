import React from 'react'
import './styles.css'

const InputRange = ({ label, value, symbol, step, max, min, alowOff, defaultValue, ...otherProps }) => {
    const background = `linear-gradient(90deg, #4e44ce  ${(value * 100) / max || 0}%, rgba(255,255,255,0.35) ${(value * 100) / max || 0}%)`

    return (
        <div className="input_range_container">
            <p className='input_range_label'>{label}</p>
            <div className='input_range_field'>
                <input type="range" min={min} max={max} step={step} value={value || 0} className="slider" style={{ background: background }} {...otherProps} placeholder="red" />
                {(value === undefined || (value < 0.5)) & alowOff ?
                    <p className='input_range_value'>Off</p>
                    : <p className='input_range_value'>{value}{symbol}</p>
                }
            </div>
        </div>

    )
}

export default InputRange