const getData = require('./webData');

const fetchData = () => new Promise((resolve, reject) => {
    getData()
        .then(response =>
            resolve({
                all: response.latest,
                countries: response.locations.map(country => ({
                    id: country.id,
                    name: country.country,
                    province: country.province && '-',
                    population: country.country_population,
                    ...country.latest
                }))
            }))
        .catch(reject)
});

module.exports = fetchData;