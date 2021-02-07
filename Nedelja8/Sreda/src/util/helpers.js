/* 
  To make the app cleaner and easly readable
  we create vital functions in this file
*/

import { removeCurrency, formatPriceString } from "./price";

export const calculatePrices = (array) => {
  const newArray = [];
  var sum = 0;

  array.map((i) => {
    const price = i.price;
    const priceWithoutCurrency = removeCurrency(price);

    return newArray.push(priceWithoutCurrency);
  });

  for (var index = 0; index < newArray.length; index++) {
    sum += newArray[index];
  }
  const finalSum = formatPriceString(sum);

  return finalSum;
};

export const removeWithId = (array, id) => {
  let newArray = array;
  newArray = newArray.filter((i) => id !== i.key);

  return newArray;
};
