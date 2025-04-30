const express = require('express');
const connectDB = require('./config/db.config');
// const cors = require('cors');
// const helmet = require('helmet');
// const { notFound, errorHandler } = require('./middleware/error.middleware');
require('dotenv').config();
const app = express();
connectDB();
// // Middleware
// app.use(helmet());
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Health check route
// app.get('/api/health', (req, res) => {
//   res.status(200).json({ status: 'OK' });
// });

// // Error handling middleware
// app.use(notFound);
// app.use(errorHandler);

module.exports = app;