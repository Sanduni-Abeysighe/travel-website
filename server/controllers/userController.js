const db = require('../utils/db');
// import '../utils/db'

module.exports = {
  saveUser: (req, res) => {
    const { message, email, inquiry } = req.body.requestBody;
    console.log("params", req.body.requestBody);
    console.log("message", message);
    const connection = db.getConnection();
    const query = 'INSERT INTO inquiries (message, email, inquiry) VALUES (?, ?, ?)';
    connection.query(query, [message, email, inquiry], (err, result) => {
      if (err) {
        console.error('Error saving data to database:', err);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }
      res.json({ message: 'Inquiry saved successfully' });
    });
  }
};
