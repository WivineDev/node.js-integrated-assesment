const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reportRoutes = require('./routes/reportRoutes');


const db = require('./config/db');

dotenv.config();

const app = express();


app.use(bodyParser.json());


db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});


app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reports', reportRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to XM Bakery API');
});


app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use('/api/auth', authRoutes);


