const priceSeparator = (str) => str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

module.exports = priceSeparator;