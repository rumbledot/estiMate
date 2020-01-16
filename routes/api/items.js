const express = require('express')
const router = express.Router();

// Item Model
const Item = require('../../models/items')

// @route   GET api/items
// @desc    Get All items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ name: -1 })
        .then(items => res.json(items))
})

// @route   GET api/items
// @desc    Get An items
// @access  Public
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
})

// @route   POST api/items
// @desc    Create an Item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        measured_by: req.body.measured_by,
        price: req.body.price,
        category:  req.body.category
    })

    newItem.save().then(item => res.json(item))
})

// @route   POST api/items
// @desc    Update an Item
// @access  Public
router.post('/', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, 
        {$set:{ 
            name: req.body.name,
            measured_by: req.body.measured_by,
            price: req.body.price,
            category:  req.body.category
        }})
})

// @route   DELETE api/items/:id
// @desc    Delete an Item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove()
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false})))
})

module.exports = router
