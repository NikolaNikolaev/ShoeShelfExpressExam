const express = require('express');
const { PORT } = require('./config/config.js');

const app = express();

require('./config/express.js')(app);



app.listen(PORT, () => console.log(`listening on port ${PORT}`));