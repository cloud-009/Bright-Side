const express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongodb = require('./Database/db');

mongoose.Promise = global.Promise;
mongoose.connect(mongodb.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected successfully');
}).catch((err) => {
    console.log('Error occured while connecting')
    console.log(err);
});

const blogRoute = require('./Routes/blog.routes');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api', blogRoute);

const port = 3500;

app.listen(port, () => {
    console.log('Running on port', port);
})

app.get('/', (req, res) => {
    res.send('invalid routes');
});

// error handling 
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
