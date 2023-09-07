const express = require('express');
const db = require('./db');
const routes = require('./routes');
const app = express()
const port = process.env.PORT || 3000;

db.init()

const middleware = require('./middleware');

middleware(app);

app.get('/health', (req, res) => {
    res.status(200).send({});
})

routes.init(app);

const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

module.exports = server;