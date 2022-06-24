import React from "react";

import './styles.css'

const Select = ({ label, children, ...otherProps }) => {
    return (
        <div className="select_container">
            <p className="select_label">{label}</p>
            <select className="select_field" {...otherProps}>
                <option defaultValue hidden></option>
                {children}
            </select>
        </div>
    )
}

export default Select