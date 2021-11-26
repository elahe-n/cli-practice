const isAmountInvalid=(amount) => {
    return amount ===undefined || amount <= 0 || isNaN(amount)
};

const regex=/^[a-zA-Z]/; 
const isInitialCurrencyInvalid=(initialCurrency) => {
return initialCurrency ===undefined || !(initialCurrency.match(regex))
};

const isTargetCurrencyInvalid=(targetCurrency) => {
    return targetCurrency ===undefined || !(targetCurrency.match(regex))
    };

module.exports={
    isAmountInvalid,
    isInitialCurrencyInvalid,
    isTargetCurrencyInvalid
};