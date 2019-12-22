'use strict';
const stateRouter=require('./state-routes');
const townRouter=require('./town-routes');
const districtRouter=require('./district-routes');

module.exports = (app) => {
    app.use('/state', stateRouter);
    app.use('/district', districtRouter);
    app.use('/town', townRouter);
};
