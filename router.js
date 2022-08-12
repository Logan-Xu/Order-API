const express = require('express')
const router = express.Router()
const orders = require('./Orders')

// Get all orders, for test use
router.get('/', (req, res) => res.json(orders))

// Get single order by ID
router.get('/:id', (req, res) => {
    const found = orders.filter(order => order.id === req.params.id)

    console.log(found)

    if (found.length === 0) {
        res.status(400).json({ msg: `No order id ${req.params.id} found` })
    } else {
        res.json(found)
    }
})

// Create an order
router.post('/', (req, res) => {
    const newOrder = {
        id: req.body.id,
        title: req.body.title,
        date: req.body.date,
        type: req.body.type,
        customer: req.body.customer
    }

    if (!newOrder.id || !newOrder.title || !newOrder.date || !newOrder.type || !newOrder.customer) {
        return res.status(400).json({ msg: 'Please make the order intact' })
    }

    if (orders.some(order => order.id === newOrder.id)) {
        return res.status(400).json({ msg: 'Order ID already exists' })
    }

    orders.push(newOrder)

    // Assume the response should be like this:
    // {
    //     "status": "successful",
    //     "order":
    //     {
    //         "id": "1",
    //         "title": "new mobile order",
    //         "date": "2016-09-22",
    //         "type": "iPhone13",
    //         "customer": "customer-1"
    //     }
    // }

    const result = {
        status: "successful",
        order: newOrder
    }

    res.json(result)
})

// Get summary data by type and date
router.get('/:type/:date', (req, res) => {
    const date = req.params.date
    const dateFormated = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6)}`

    // Get all orders for that type in that day
    const ordersThatDay = orders.filter(order => order.type === req.params.type && order.date === dateFormated)

    if (ordersThatDay.length === 0) {
        res.status(400).json({ msg: `No order with Type ${req.params.type} on Date ${dateFormated} found` })
    } else {
        const count = ordersThatDay.length

        // Loop through orderIDs in reverse order to find out the last 10 orders
        const orderIDs = ordersThatDay.reverse().map(order => order.id).slice(0, 10)

        const relatedCustomers = new Set()
        ordersThatDay.forEach(order => {
            relatedCustomers.add(order.customer)
        })

        const result = {
            type: req.params.type,
            count: count,
            orders: orderIDs,
            related_customers: Array.from(relatedCustomers)
        }

        res.json(result)
    }
})

module.exports = router