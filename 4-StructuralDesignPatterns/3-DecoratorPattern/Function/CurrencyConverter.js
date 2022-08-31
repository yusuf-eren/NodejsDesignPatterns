const axios = require("axios");

const CurrencyConverter = (fn) => {
  return async function (qty, price, base, to) {
    const result = await fn(qty, price); // Call the original function
    const currencyRate = await axios(
      `https://api.apilayer.com/fixer/convert?to=${to}&from=${base}&amount=${price*qty}`,
      {
        method: "GET",
        redirect: "follow",
        headers: {
          apikey: "oEXrPI6wdB95Fk2EG82ifjaENyPioN1E",
        },
      }
    );

    return currencyRate.data['result'];
  };
};

module.exports = CurrencyConverter;
