/* 
  In this file you will find functions that
  will help you deal with the prices
*/

const CURRENCY = "$";

export const removeCurrency = (string) => {
  const replaceString = string.replace("$", "");
  const number = Number(replaceString); // Format number

  return number;
};

export const formatPriceString = (price) => {
  return `${CURRENCY}${price}`;
};
