import React from "react";

import './styles.css'

const Input = ({label, ...otherProps}) => {
    return (
        <div className="input_container">
            <p className="input_label">{label}</p>
            <input className="input_field" {...otherProps}/>
        </div>
    )
}

export default Input