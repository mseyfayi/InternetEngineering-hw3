const getData = require('./webData');
const priceSeparator = require('../helper').priceSeparator;

const separateValues = data => ({
    confirmed: priceSeparator(data.confirmed),
    deaths: priceSeparator(data.deaths),
    recovered: priceSeparator(data.recovered)
});

const fetchData = () => new Promise((resolve, reject) => {
    getData()
        .then(response =>
            resolve({
                all: separateValues(response.latest),
                countries: response.locations.map(country => ({
                    id: country.id,
                    name: country.country,
                    province: country.province && '-',
                    population: priceSeparator(country.country_population),
                    ...separateValues(country.latest)
                }))
            }))
        .catch(reject)
});

module.exports = fetchData;