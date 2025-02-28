// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.
const { isAmountInvalid } = require ('./validator-functions'); 
const { isInitialCurrencyInvalid } = require ('./validator-functions'); 
const { isTargetCurrencyInvalid } = require ('./validator-functions');
const { isInitialCurrencyExist } = require ('./rate-existence');
const { isTargetCurrencyExist } = require ('./rate-existence');

// --------------------------------------------------
// Step 1: Capture user input
// --------------------------------------------------
// In this step we will capture the command line  information supplied by the user.

// We will store each piece of information in a dedicated variable for later use.
const amount=process.argv[2];
const initialCurrency=process.argv[3];
const targetCurrency=process.argv[4];

// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.

// If any of the required information is missing, display a meaningful message
// and exit the program.


if (isAmountInvalid(amount)){
    console.log("Ooops, there is no amount or it is less than 0 or it is not a NUMBER. recieved amount: ",amount)
    process.exit();
}

if (isInitialCurrencyInvalid(initialCurrency)) {
    console.log("Ooops, there is no initial currency or it is not a valid input.")
    process.exit();
}

if (isTargetCurrencyInvalid(targetCurrency) ){
    console.log("Ooops, there is no target currency or it is not a valid input.")
    process.exit();
}
// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------
// Here we will define which currency conversions are supported, as well as the
// rates between each currency. We will capture this information as an object
// and store it in dedicated varaible for later use.

// We will use the official currency abbreviation for each currency (eg. USD, CAD, etc.).

// The conversion rates do not have to be accurate, athough this resource contains
// up-to-date rate information: https://www.xe.com/
let usd=1
let gbp=1
let cadToUsd=0.7
let cadToGbp=0.5
let usdToGbp=0.7

// --------------------------------------------------
// Step 4: Ensure that a conversion rate exists
// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.
const upperInitialCurrency=initialCurrency.toUpperCase();
const upperTargetCurrency=targetCurrency.toUpperCase();

if (!isInitialCurrencyExist(upperInitialCurrency))
{
    console.log("Oops, initial currency is not in supported currency ",initialCurrency)
    process.exit();
}

if (!isTargetCurrencyExist (upperTargetCurrency))
{
    console.log("Oops, target currency is not in supported currency ",targetCurrency)
    process.exit();
}

// --------------------------------------------------
// Step 5: Perform conversion
// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.

// Now we will compute the rate, apply it to the amount, and capture the result.
let convertedAmount;
if (upperInitialCurrency === 'USD' ) {
    if (upperTargetCurrency=== 'CAD'){
        convertedAmount= amount/cadToUsd;}
    else if (upperTargetCurrency=== 'GBP'){
        convertedAmount= amount*usdToGbp;}    
}

else if (upperInitialCurrency === 'CAD' ) {
    if ( upperTargetCurrency=== 'USD'){
        convertedAmount= amount*cadToUsd;}
    else if ( upperTargetCurrency=== 'GBP'){
        convertedAmount= amount*cadToGbp;}
}

else if (upperInitialCurrency === 'GBP' ) {
    if ( upperTargetCurrency=== 'USD'){
        convertedAmount= amount/usdToGbp;}
    else if ( upperTargetCurrency=== 'CAD'){
        convertedAmount= amount/cadToGbp;}
}
// --------------------------------------------------
// Step 6: Display results
// --------------------------------------------------
// Finally we will display the result as part of a meaningful message.

// This message should also include the original amount and currency information
// supplied by the user.

console.log(`You are submitted ${amount} ${upperInitialCurrency}`);
console.log(`This is equal to ${convertedAmount.toFixed(2)} ${upperTargetCurrency}`);