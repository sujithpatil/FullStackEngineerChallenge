const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const admin = require('./routes/admin');
const feedback = require('./routes/feedback');
const authenticate = require('./routes/authenticate');

const app = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use(cors({
    credentials: true
}));
app.use(cookieParser());

app.use('/api/admin', admin);
app.use('/api/feedbacks', feedback);
app.use('/api/authenticate', authenticate)

const PORT = process.env.PORT || 3300;

const dbUrl = process.env.DATABASE;

app.listen(PORT, () => {
    console.log(`Server started on ${ PORT }`);
    mongoose.connect( dbUrl, { useNewUrlParser: true } )
        .then( _ => console.log('Connected to DB') )
        .catch( _ => console.log('Error connecting to DB'));
})