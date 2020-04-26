const axios = require('axios');
const logger = require('../logger');

const url = 'http://covid19api.xapix.io/v2/locations';

const getData = () => new Promise(((resolve, reject) =>
    axios
        .get(url)
        .then(response => {
            resolve(response.data)
        })
        .catch(error=> {
            logger.log('error',error);
            reject(error);
        })));

module.exports = getData;