import React, { useEffect } from 'react'

import Select from '../../Select';

const CandlePattern = ({ indicator, setIndicator, setNextIndicator }) => {

    const addContidionalList = [
        { value: "AND", label: "AND" },
        { value: "OR", label: "OR" },
        { value: "Final", label: "Final" }
    ]

    const contidionalList = [
        { value: "true", label: "True" },
        { value: "false", label: "False" },
    ]

    useEffect(() => {
        if (indicator.addConditional === "Final") {
            setNextIndicator({})
        }
    }, [indicator, setNextIndicator])

    const editContidionalList = contidionalList.filter(item => item.value === indicator.conditional)

    return (
        <React.Fragment>
            <Select
                value={indicator.conditional}
                label="Conditional"
                placeholder={editContidionalList[0]?.label || "Conditional"}
                onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}
            >
                {contidionalList.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Select>

            <Select
                value={indicator.addConditional}
                label={"Sequence"}
                placeholder={indicator.addConditional || "Sequence"}
                onChange={(e) => { setIndicator({ ...indicator, addConditional: e.target.value }) }}
            >
                {addContidionalList.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Select>            
        </React.Fragment>
    )
}

export default CandlePattern




