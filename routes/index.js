const index = require('../web').routes;

const appRouter = (app) => {
    const setRouters = (model) => model.forEach(route =>
        app.route(route.url)[route.method](route.handler) // add "rout.url" to routes with "route.method" as method and "route.handler" as controller
    );

    setRouters(index);

    // url not found 404
    app.all('*', (req, res) => {
        res.status(404).send('Url not found');
    });
};

module.exports = appRouter;