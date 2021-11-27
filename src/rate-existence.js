const supportedCurrency=['USD','CAD','GBP'];

const isInitialCurrencyExist=(upperInitialCurrency) => {
    return supportedCurrency.includes(upperInitialCurrency) === true
};

const isTargetCurrencyExist=(upperTargetCurrency) => {
    return supportedCurrency.includes(upperTargetCurrency) === true
};

module.exports={
    isInitialCurrencyExist,
    isTargetCurrencyExist
   
};