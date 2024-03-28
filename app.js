require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session'); 

const router = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(`${__dirname}/public`));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.use(flash());
app.use(morgan('dev'));
app.use(router);

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
