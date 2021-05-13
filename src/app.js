const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express();

//settings
app.set('port', process.env.PORT || 3000)

//middleware
app.use(cors());
// app.use(cors({origin: "http://localhost:3000"}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/user/user', require('./routes/user/user'))
app.use('/api/memory_management/memory', require('./routes/memory_management/memory'))
app.use('/api/memory_management/partition', require('./routes/memory_management/partition'))
app.use('/api/memory_management/work', require('./routes/memory_management/work'))
app.use('/api/memory_management/event', require('./routes/memory_management/event'))

module.exports = app;