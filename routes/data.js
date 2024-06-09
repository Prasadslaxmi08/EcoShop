const express = require('express');
const router = express.Router();
const Data = require('../models/Data'); // Assuming you have a Data model

router.get('/data', async (req, res) => {
  try {
    const data = await Data.find(); // Fetch data from MongoDB
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
