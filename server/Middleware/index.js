const cors = require('cors');
require('dotenv').config();


const corsOptions = {
	origin: ['https://www.mote.nz/', 'https://mote.nz/', 'https://test.mote.nz/'],
	optionsSuccessStatus: 200,
};



module.exports = cors(corsOptions);
