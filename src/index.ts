import express from 'express';
import sequelize from './common/connection';
import authRoutes from './routes/user';
import bookRoutes from './routes/book';
// import dotenv from 'dotenv';

// dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
