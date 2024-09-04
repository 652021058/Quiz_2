const Book = require('../models/books');

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getBook = async (req, res) => {
    try {
        const { id } = req.params; // แก้จาก req.param เป็น req.params
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createBook = async (req, res) => {
    const { title, author, published_year, genre, available } = req.body;
    const book = new Book({ title, author, published_year, genre, available });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params; 
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true }); // ใช้ await เพื่อรอผลลัพธ์
        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params; // แก้จาก req.param.id เป็น req.params.id
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        await Book.findByIdAndDelete(id); // ใช้ await เพื่อรอผลลัพธ์
        res.status(200).json({ message: 'Book deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
