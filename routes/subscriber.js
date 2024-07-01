const express = require('express');
const router = express.Router();

const Subscriber = require('../model/subscriber')

const { getAllSubscriber,
        getSubscriber,
        createSubscriber,
        updateSubscriber,
        deleteSubscriber
       } = require('../controller/subscriber')
       
// Getting all
router.get('/', getAllSubscriber)

// Getting one
router.get('/:id', getSubscriber)

// Creating One
router.post('/', createSubscriber)

// Update one 
router.put('/:id', updateSubscriber)

// Delete One 
router.delete('/:id', deleteSubscriber)

module.exports = router;