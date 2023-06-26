const express = require('express');
const router = express.Router();

// controllers
//const controller = require('./controller/mainController.js');

// serve app jsx
router.get('/', (req, res) => {
    return res
      .status(200)
      .sendFile(path.join(__dirname, '../client/index.html'));
  });

module.exports = router;