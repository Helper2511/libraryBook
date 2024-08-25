import { Request, Response } from 'express';
import Book from '../models/books';
import { Op } from 'sequelize';

export const getBooks = async (req: Request, res: Response) => {
  const { page = 1, limit = 10, author, genre } = req.query;
  const offset = (Number(page) - 1) * Number(limit);

  try {
    const where: any = {};
    if (author) where['author'] = author;
    if (genre) where['genre'] = genre;

    const books = await Book.findAll({
      where,
      limit: Number(limit),
      offset,
    });

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createBook = async (req: any, res: Response) => {
  const { title, author, publishedDate, pages, genre } = req.body;
  const userId = req.user?.id;

  try {
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const obj: any = { title, author, publishedDate, pages, genre, userId };
    const book = await Book.create(obj);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateBook = async (req: any, res: Response) => {
  const { id } = req.params;
  const { title, author, publishedDate, pages, genre } = req.body;
  const userId = req.user?.id;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    if (book.userId !== userId) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    await book.update({ title, author, publishedDate, pages, genre });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteBook = async (req: any, res: Response) => {
  const { id } = req.params;
  const userId = req.user?.id;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    if (book.userId !== userId) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    await book.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
