const app = require('./index');
const connectFn = require('./database/database').connect;

const server = app.listen(3000, connectFn);