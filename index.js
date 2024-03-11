const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./server/utils/db');
const userRoutes = require('./server/routes/users');
const authMiddleware = require('./server/middlewares/authMiddleware');

const app = express();
app.use(bodyParser.json());

// Initialize database connection
db.connect();

// Enable CORS for all routes
app.use(cors());

// Use routes
// app.use('/travel', authMiddleware, userRoutes);
app.use('/travel', userRoutes);


// Start the Express server
const port = 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
