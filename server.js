const express = require('express');
const { PORT } = require('./config/config.js');
const routes = require('./routes.js');

const app = express();

require('./config/express.js')(app); // Setup Express
require('./config/mongoose.js'); // Setup Mongoose

app.use(routes);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));