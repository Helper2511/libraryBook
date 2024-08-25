import { Router } from 'express';
import { authenticate } from '../common/authMiddleware';
import { getBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/bookController';

const router = Router();

router.use(authenticate);

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
