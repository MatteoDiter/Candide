const express = require('express');
const router = express.Router();
const path = require('path');

// controllers
//const controller = require('./controller/mainController.js');

// Serve index.html for all other routes to enable client-side routing
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;