const getData = require('./webService');

const get = (req, res) => {
    getData()
        .then(data => res.render('web/index', data))
        .catch(error => res.send('error occurred'));
};

module.exports = get;