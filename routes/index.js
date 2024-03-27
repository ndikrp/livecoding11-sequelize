const router = require('express').Router();

const Customer = require('./CustomerRouter')

router.use('/api/v1/customers', Customer)

module.exports = router