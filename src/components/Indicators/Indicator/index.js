import React, { useEffect } from 'react'
import Select from '../../Select'
import InputRange from '../../InputRange'
import InputCheck from '../../InputCheck'
import {
    addContidionalList,
    contidionalListCross,
    contidionalListTrend,
    contidionalListPrice,
    contidionalListValue,
    contidionalListBands,
    contidionalListPriceIncreased,
    contidionalListPriceDecreased
} from '../../../assets/data'

const Indicator = ({ indicator, setIndicator, setNextIndicator }) => {

    const editContidionalListValue = contidionalListValue.filter(item => item.value === indicator.conditional)
    const editContidionalListCross = contidionalListCross.filter(item => item.value === indicator.conditional)
    const editContidionalListTrend = contidionalListTrend.filter(item => item.value === indicator.conditional)
    const editContidionalListPrice = contidionalListPrice.filter(item => item.value === indicator.conditional)
    const editContidionalListBands = contidionalListBands.filter(item => item.value === indicator.conditional)
    const editContidionalListPriceDecreased = contidionalListPriceDecreased.filter(item => item.value === indicator.conditional)
    const editContidionalListPriceIncreased = contidionalListPriceIncreased.filter(item => item.value === indicator.conditional)

    useEffect(() => {
        if (indicator.addConditional === "Final") {
            setNextIndicator({})
        }
    }, [indicator, setNextIndicator])

    return (
        <React.Fragment>

            {indicator.indicator === "MACD" ?
                <Select
                    value={indicator.conditional}
                    label="Conditional"
                    placeholder={editContidionalListCross[0]?.label || "Conditional"}
                    onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                    {contidionalListCross.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                </Select>
                : indicator.indicator === "Supertrend" || indicator.indicator === "AROON" || indicator.indicator === "MOM" ?
                    <Select
                        value={indicator.conditional}
                        label="Conditional"
                        placeholder={editContidionalListTrend[0]?.label || "Conditional"}
                        onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                        {contidionalListTrend.map((item) => (
                            <option key={item.value} value={item.value}>{item.label}</option>
                        ))}
                    </Select>
                    : indicator.indicator === "WMA" ?
                        <Select
                            value={indicator.conditional}
                            label="Conditional"
                            placeholder={editContidionalListPrice[0]?.label || "Conditional"}
                            onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                            {contidionalListPrice.map((item) => (
                                <option key={item.value} value={item.value}>{item.label}</option>
                            ))}
                        </Select>
                        : indicator.indicator === "Price Increased" ?
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <InputRange
                                    onChange={(e) => setIndicator({ ...indicator, value: e.target.value })}
                                    label="Percent"
                                    value={indicator.value || 0.5}
                                    step="0.5"
                                    symbol={"%"}
                                    max={100}
                                    min={0.5}
                                />
                                <Select
                                    value={indicator.conditional}
                                    label="From"
                                    placeholder={editContidionalListPriceIncreased[0]?.label || "From"}
                                    onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                                    {contidionalListPriceIncreased.map((item) => (
                                        <option key={item.value} value={item.value}>{item.label}</option>
                                    ))}
                                </Select>
                            </div>
                            : indicator.indicator === "Price Decreased" ?
                                <div style={{ display: 'flex' }}>
                                    <InputRange
                                        onChange={(e) => setIndicator({ ...indicator, value: e.target.value })}
                                        label="Percent"
                                        value={indicator.value || 0.5}
                                        step="0.5"
                                        symbol={"%"}
                                        max={100}
                                        min={0.5}
                                    />
                                    <Select
                                        value={indicator.conditional}
                                        label="From"
                                        placeholder={editContidionalListPriceDecreased[0]?.label || "From"}
                                        onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                                        {contidionalListPriceDecreased.map((item) => (
                                            <option key={item.value} value={item.value}>{item.label}</option>
                                        ))}
                                    </Select>
                                </div>
                                : indicator.indicator === "Bollinger Bands" ?
                                    <Select
                                        value={indicator.conditional}
                                        label="Conditional"
                                        placeholder={editContidionalListBands[0]?.label || "Conditional"}
                                        onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                                        {contidionalListBands.map((item) => (
                                            <option key={item.value} value={item.value}>{item.label}</option>
                                        ))}
                                    </Select>
                                    : <Select
                                        value={indicator.conditional}
                                        label="Conditional"
                                        placeholder={editContidionalListValue[0]?.label || "Conditional"}
                                        onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                                        {contidionalListValue.map((item) => (
                                            <option key={item.value} value={item.value}>{item.label}</option>
                                        ))}
                                    </Select>}
            {indicator.indicator === "Supertrend" ||
                indicator.indicator === "MACD" ||
                indicator.indicator === "Bollinger Bands" ||
                indicator.indicator === "WMA" ||
                indicator.indicator === "MOM" ||
                indicator.indicator === "AROON" ||
                indicator.indicator === "Price Increased" ||
                indicator.indicator === "Price Decreased" ?

                null
                : <InputRange
                    onChange={(e) => setIndicator({ ...indicator, value: e.target.value })}
                    label="Value"
                    value={indicator.value || 0}
                    step="1"
                    max={100}
                    min={0}
                />
            }
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


export default Indicator;