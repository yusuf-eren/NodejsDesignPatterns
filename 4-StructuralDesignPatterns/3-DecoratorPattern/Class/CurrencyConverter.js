import axios from "axios";

const CurrencyConverter = (base, to) => {
  return function (target, name, descriptor) {
    try {
      const fn = descriptor.value; // The original function
      descriptor.value = async (...args) => {
        // Define the decorator
        const result = await fn.call(this, ...args);
        const currencyRate = await axios(
          `https://api.apilayer.com/fixer/convert?to=${to}&from=${base}`,
          {
            method: "GET",
            redirect: "follow",
            headers: {
              apikey: "oEXrPI6wdB95Fk2EG82ifjaENyPioN1E",
            },
          }
        );

        return await (currencyRate.data[
          `${to.toUpperCase()}_${base.toUpperCase()}`
        ]["val"] * result);
      };

      return descriptor;
    } catch (error) {
      console.log(error);
    }
  };
};

export default CurrencyConverter;
