const Sequelize = require("sequelize");

const db = require("../config/db");

const Document = db.define("document", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  documentName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  publicationDate: {
    type: Sequelize.DATE,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  // Add more fields as needed for your Document table
  // For example, you can add fields for keywords, categories, etc.
  keywords: {
    type: Sequelize.STRING,
  },
  categories: {
    type: Sequelize.STRING,
  },
});

module.exports = Document;
