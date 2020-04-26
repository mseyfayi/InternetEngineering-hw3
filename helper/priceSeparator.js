const priceSeparator = (str) => str ? str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '0';

module.exports = priceSeparator;