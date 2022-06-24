export const symbolsList = [
    { value: "BTCUSDC", label: "BTC/USDC" },
    { value: "ETHUSDC", label: "ETH/USDC" },
    { value: "ADAUSDC", label: "ADA/USDC" },
    { value: "LTCUSDC", label: "LTC/USDC" },
    { value: "LINKUSDC", label: "LINK/USDC" },
    { value: "SOLUSDC", label: "SOL/USDC" },
    { value: "BNBUSDC", label: "BNB/USDC" },
    { value: "XRPUSDC", label: "XRP/USDC" },
    { value: "EOSUSDC", label: "EOS/USDC" },
    { value: "ZECUSDC", label: "ZEC/USDC" },

]

export const timeframeList = [
    { value: "3m", label: "3m" },
    { value: "5m", label: "5m" },
    { value: "15m", label: "15m" },
    { value: "30m", label: "30m" },
    { value: "1h", label: "1h" },
    { value: "2h", label: "2h" },
    { value: "4h", label: "4h" },
    { value: "1d", label: "1d" },
]

export const addContidionalList = [
    { value: "AND", label: "AND" },
    { value: "OR", label: "OR" },
    { value: "Final", label: "Final" }
]

export const contidionalList = [
    { value: ">", label: "Price Above" },
    { value: "<", label: "Price Below" },
    { value: "> ma", label: "Crossover" },
    { value: "< ma", label: "Crossdown" }
]

export const maList = [
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

export const contidionalListCross = [
    { value: ">", label: "Crossover" },
    { value: "<", label: "Crossdown" },
]

export const contidionalListTrend = [
    { value: ">", label: "In Uptrend" },
    { value: "<", label: "In Downtrend" },
]

export const contidionalListPrice = [
    { value: ">", label: "Above Price" },
    { value: "<", label: "Below Price" },
]

export const contidionalListValue = [
    { value: ">", label: "Greater than" },
    { value: "<", label: "Less than" },
]

export const contidionalListBands = [
    { value: ">", label: "Upperband Price" },
    { value: "<", label: "Lowerband Price" },
]

export const contidionalListPriceIncreased = [
    { value: "buy", label: "Buy Price" },
    { value: "3m", label: "Within 3 minutes" },
    { value: "15m", label: "Within 15 minutes" },
    { value: "30m", label: "Within 30 minutes" },
    { value: "1h", label: "Within 1 hour" },
    { value: "2h", label: "Within 2 hours" },
    { value: "4h", label: "Within 4 hours" },
    { value: "1d", label: "Within 1 day" }
]

export const contidionalListPriceDecreased = [
    { value: "buy", label: "Buy Price" },
    { value: "3m", label: "Within 3 minutes" },
    { value: "15m", label: "Within 15 minutes" },
    { value: "30m", label: "Within 30 minutes" },
    { value: "1h", label: "Within 1 hour" },
    { value: "2h", label: "Within 2 hours" },
    { value: "4h", label: "Within 4 hours" },
    { value: "1d", label: "Within 1 day" }
]

export const indicatorsList = [
    { type: "indicator", value: "rsi", label: "RSI", permission: "all" },
    { type: "indicator", value: "macd", label: "MACD", permission: "all" },
    { type: "indicator", value: "price_increased", label: "Price Increased", permission: "all" },
    { type: "indicator", value: "price_decreased", label: "Price Decreased", permission: "all" },
    { type: "indicator", value: "supertrend", label: "Supertrend" },
    { type: "indicator", value: "stochastic", label: "Stochastic" },
    { type: "indicator", value: "atr", label: "ATR" },
    { type: "indicator", value: "bollinger_bands", label: "Bollinger Bands" },
    { type: "indicator", value: "wma", label: "WMA" },
    { type: "indicator", value: "adx", label: "ADX" },
    { type: "indicator", value: "aroon", label: "AROON" },
    { type: "indicator", value: "mfi", label: "MFI" },
    { type: "indicator", value: "mom", label: "MOM" },
    { type: "indicator", value: "willr", label: "WillR" },
    { type: "ma", value: "ma_10", label: "MA(10)", permission: "all" },
    { type: "ma", value: "ma_20", label: "MA(20)", permission: "all" },
    { type: "ma", value: "ma_30", label: "MA(30)" },
    { type: "ma", value: "ma_40", label: "MA(40)" },
    { type: "ma", value: "ma_50", label: "MA(50)" },
    { type: "ma", value: "ma_100", label: "MA(100)" },
    { type: "ma", value: "ma_200", label: "MA(200)" },
    { type: "ma", value: "ema_10", label: "EMA(10)" },
    { type: "ma", value: "ema_20", label: "EMA(20)" },
    { type: "ma", value: "ema_30", label: "EMA(30)" },
    { type: "ma", value: "ema_40", label: "EMA(40)" },
    { type: "ma", value: "ema_50", label: "EMA(50)" },
    { type: "ma", value: "ema_100", label: "EMA(100)" },
    { type: "ma", value: "ema_200", label: "EMA(200)", permission: "all" },
    { type: "candle", value: "cdlhammer", label: "Hammer" },
    { type: "candle", value: "cdlinvertedhammer", label: "Inverted Hammer" },
    { type: "candle", value: "cdlengulfing", label: "Engulfing Pattern" },
    { type: "candle", value: "cdlpiercing", label: "Piercing Pattern" },
    { type: "candle", value: "cdlmorningstar", label: "Morning Star" },
    { type: "candle", value: "cdl3whitesoldiers", label: "3 White Soldiers" },
    { type: "candle", value: "cdlabandonedbaby", label: "Abandoned Baby" },
    { type: "candle", value: "cdlbreakaway", label: "Breakaway" },
    { type: "candle", value: "cdlhangingman", label: "Hanging Man" },
    { type: "candle", value: "cdlshootingstar", label: "Shooting Star" },
    { type: "candle", value: "cdleveningstar", label: "Evening Star" },
    { type: "candle", value: "cdl3blackcrows", label: "3 Black Crows" },
    { type: "candle", value: "cdldarkcloudcover", label: "Dark Cloud Cover" },
    { type: "candle", value: "cdldoji", label: "Doji" },
    { type: "candle", value: "cdlspinningtop", label: "Spinning Top" },
    { type: "candle", value: "cdlharami", label: "Harami Pattern" },
    { type: "candle", value: "cdl3linestrike", label: " Three-Line Strike" },
    { type: "candle", value: "cdldragonflydoji", label: "Dragonfly Doji" },
    { type: "candle", value: "cdlmatchinglow", label: "Matching Low" },
    { type: "candle", value: "cdltasukigap", label: "Tasuki Gap" },
]