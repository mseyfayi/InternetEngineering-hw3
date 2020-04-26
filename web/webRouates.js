const controller = require('./webController');

const get = {
    url: '/',
    handler: controller,
    method: 'get'
};

module.exports = [get];