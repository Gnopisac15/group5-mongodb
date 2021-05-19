// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const employees = require('./routes/api/employees');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/employees', employees);

const port = process.env.PORT || 9555;

app.listen(port, () => console.log(`Server running on port ${port}`));