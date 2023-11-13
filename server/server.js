const mongoose = require('mongoose')
const express = require('express')
const Routes = require('./routes/Route')
const session = require('express-session');
const cors = require('cors');
const app = express();
const compression = require("compression")

app.use(cors());
app.use(compression());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('dotenv').config();

const mongoDBUrl = process.env.MONGO_URL;

mongoose.connect(mongoDBUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
    store: new session.MemoryStore()
}));

app.use('/api',Routes);

app.listen(3000, () => {
    console.log('server running at port 3000');
})