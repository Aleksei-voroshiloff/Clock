const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const clockRouter = require('./routes/clockRouter');

const authRouter = require('./routes/authRouter');
const tokenRouter = require('./routes/tokenRouter');
const orderRouter = require('./routes/orderRouter');
const path = require ('path')

const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/clocks', clockRouter);
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/order', orderRouter)


app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});
module.exports = app;
