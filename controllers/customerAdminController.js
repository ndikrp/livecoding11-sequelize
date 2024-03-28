const { Customer } = require('../models')

const customerPage = async (req, res) => {
    try {
        const customers = await Customer.findAll()
        res.render('customers/index', {
            customers,
            message: req.flash('message')
        })
    } catch (err) {
        res.render('error.html', {
            message: err.message
        })
    }
}

const createCustomerPage = async (req, res) => {
    try {
        const customers = await Customer.findAll()
        res.render('customers/create', {
        })
    } catch (err) {
        res.render('error.html', {
            message: err.message
        })
    }
}

const createCustomer = async (req, res) => {
    try {
        await Customer.create(req.body)
        req.flash('message', 'Ditambah')
        res.render('customers/index', {
            customers: await Customer.findAll()
        })
    } catch (err) {
        res.render('error.html', {
            message: err.message
        })
    }
}

const editCustomerPage = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id)
        res.render('customers/edit', {
            customer,
        })
    } catch (err) {
        res.render('error.html', {
            message: err.message
        })
    }
}

const editCustomer = async (req, res) => {
    try {
        await Customer.update(req.params.id, req.body, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/customers')
    } catch (err) {
        res.render('error.html', {
            message: err.message
        })
    }
}

const deleteCustomer = async (req, res) => {
    try {
        await Customer.destroy(req.params.id, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/customers')
    } catch (err) {
        res.render('error.html', {
            message: err.message
        })
    }
}

module.exports = {
    customerPage,
    createCustomerPage,
    createCustomer,
    editCustomerPage,
    editCustomer,
    deleteCustomer
}