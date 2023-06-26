const express = require('express');
const router = express.Router();

// controllers
//const controller = require('./controller/mainController.js');

// Serve index.html for all other routes to enable client-side routing
// router.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/index.html'));
//   });

module.exports = router;