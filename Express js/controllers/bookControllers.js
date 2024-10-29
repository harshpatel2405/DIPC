// controllers/bookController.js
const books = []; // Temporary data store (could use MongoDB here)

// GET all books
exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// GET a single book by ID
exports.getBookById = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
};

// POST a new book
exports.createBook = (req, res) => {
  const { title, author, year } = req.body;
  const newBook = { id: books.length + 1, title, author, year };
  books.push(newBook);
  res.status(201).json(newBook);
};

// PATCH (update) an existing book
exports.updateBook = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author, year } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;
  if (year) book.year = year;

  res.status(200).json(book);
};

// DELETE a book by ID
exports.deleteBook = (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  books.splice(index, 1);
  res.status(204).send(); // No content
};
