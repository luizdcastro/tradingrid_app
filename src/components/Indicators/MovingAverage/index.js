import React, { useEffect } from 'react'

import Select from '../../Select'
import InputCheck from '../../InputCheck'

const MovingAverage = ({ indicator, setIndicator, setNextIndicator }) => {

    const addContidionalList = [
        { value: "AND", label: "AND" },
        { value: "OR", label: "OR" },
        { value: "Final", label: "Final" }
    ]

    const contidionalList = [
        { value: ">", label: "Price Above" },
        { value: "<", label: "Price Below" },
        { value: "> ma", label: "Crossover" },
        { value: "< ma", label: "Crossdown" }
    ]

    const maList = [
        { value: "ma_10", label: "MA(10)" },
        { value: "ma_20", label: "MA(20)" },
        { value: "ma_30", label: "MA(30)" },
        { value: "ma_40", label: "MA(40)" },
        { value: "ma_50", label: "MA(50)" },
        { value: "ma_100", label: "MA(100)" },
        { value: "ma_200", label: "MA(200)" },
        { value: "ema_10", label: "EMA(10)" },
        { value: "ema_20", label: "EMA(20)" },
        { value: "ema_30", label: "EMA(30)" },
        { value: "ema_40", label: "EMA(40)" },
        { value: "ema_50", label: "EMA(50)" },
        { value: "ema_100", label: "EMA(100)" },
        { value: "ema_200", label: "EMA(200)" }
    ]

    useEffect(() => {
        if (indicator.addConditional === "Final") {
            setNextIndicator({})
        }
    }, [indicator, setNextIndicator])

    const editLabelConditional = contidionalList.filter(item => item.value === indicator.conditional)
    const editLabelValue = maList.filter(item => item.value === indicator.value)

    return (
        <React.Fragment>
            <Select
                value={indicator.conditional}
                label="Conditional"
                placeholder={editLabelConditional[0]?.label || "Conditional"}
                onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}
            >
                {contidionalList.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Select>

            {indicator.conditional === "> ma" || indicator.conditional === "< ma" ?
                <Select
                    value={indicator.ma}
                    label={"MA/EMA"}
                    placeholder={editLabelValue[0]?.label || "MA/EMA"}
                    onChange={(e) => { setIndicator({ ...indicator, value: e.target.value }) }}
                >
                    {maList.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                </Select>
                : null}


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

export default MovingAverage