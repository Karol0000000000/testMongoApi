const app = require('./index');
const connect = require('./database/connect').connect;

const server = app.listen(3000, connect);