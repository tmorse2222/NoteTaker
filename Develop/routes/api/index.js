const router = require('express').Router();
const noteRoutes = require('./notes');

router.use('/notes', noteRoutes);

module.exports = router;