import { DataTypes, Model } from 'sequelize';
import sequelize from '../common/connection';
import User from './users';

interface BookAttributes {
  id: number;
  title: string;
  author: string;
  publishedDate?: Date;
  pages: number;
  genre?: string;
  userId: number;
}

class Book extends Model<BookAttributes> implements BookAttributes {
  public id!: number;
  public title!: string;
  public author!: string;
  public publishedDate?: Date;
  public pages!: number;
  public genre?: string;
  public userId!: number;
}

Book.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publishedDate: {
    type: DataTypes.DATE,
  },
  pages: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Book',
});

export default Book;
