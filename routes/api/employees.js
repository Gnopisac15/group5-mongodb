// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Employee model
const Employee = require('../../models/Employee');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('employee route testing!'));

// @route GET api/employees
// @description Get all employees
// @access Public
router.get('/', (req, res) => {
    Employee.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(404).json({ nobooksfound: 'No Employee data found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Employee.findById(req.params.id)
        .then(employee => res.json(employee))
        .catch(err => res.status(404).json({ nobookfound: 'No Employee data found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Employee.create(req.body)
        .then(employee => res.json({ msg: 'Employee added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this Employee' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body)
        .then(employee => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, req.body)
        .then(employee => res.json({ mgs: 'Employee data deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No Employee data found ' }));
});

module.exports = router;