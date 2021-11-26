const isAmountInvalid=(amount) => {
    return amount ===undefined || amount <= 0 || isNaN(amount)
};

module.exports={
    isAmountInvalid,
};