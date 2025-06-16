// This file contains the routes for the products API
const Products = require('./Products');
const express = require('express');
const router = express.Router();

// Create a new task
router.post('/products', async (req, res) => {
    try {
        const products = new Products(req.body);
        await products.save();
        res.status(201).send(products);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all tasks
router.get('/products', async (req, res) => {
    try {
        const products = await Products.find();
        res.send(products);
    } catch (error) {
        res.status(500).send(error)
    }
});

// // Get a task by ID
router.get('/products/:id', async (req, res) => {
    try {
        const products = await Products.findByIdAndUpdate(req.params.id);
        if (!products) return res.status(404).send();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Update a task
router.put('/products/:id', async (req, res) => {
    try {

        console.log(req.body);

        const products = await Products.findOneAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!products) return res.status(404).send();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Delete a Task
router.delete('/products/:id', async (req, res) => {
    try {
        const products = await Products.findByIdAndDelete((req.params.id));
        if (!products) return res.status(404).send();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;