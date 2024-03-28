const router = require('express').Router();

const Customer = require('./CustomerRouter')
const CustomerAdmin = require('./CustomerAdminRouter')

router.use('/api/v1/customers', Customer)
router.use('/customers', CustomerAdmin)

module.exports = router