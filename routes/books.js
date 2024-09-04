const express = require("express");
const router = express.Router();

const { getBooks, getBook, createBook, updateBook, deleteBook } = 
require('../controllers/bookController'); 

router.get('/books', getBooks);
router.get('/books/:genre', getBook);
router.post('/books', createBook);
router.put('/books/:id', updateBook); 
router.delete('/books/:id', deleteBook);

module.exports = router;
