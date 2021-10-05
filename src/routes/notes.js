const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
    res.send('Notes from database');
});


router.get('/', (req, res) => {
    res.send('Index');
});


module.exports = router;