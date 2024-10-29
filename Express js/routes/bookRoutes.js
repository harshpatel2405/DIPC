// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookControllers');

router.get('/', bookController.getAllBooks);         // GET all books
router.get('/:id', bookController.getBookById);      // GET a single book by ID
router.post('/', bookController.createBook);         // POST a new book
router.patch('/:id', bookController.updateBook);     // PATCH (update) a book by ID
router.delete('/:id', bookController.deleteBook);    // DELETE a book by ID

module.exports = router;
