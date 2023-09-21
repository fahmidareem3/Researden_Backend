const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const sequelize = require("./config/db");
const document = require("./models/documents");
const researchDocument = require("./models/research_doc");
const tutorialDocument = require("./models/tutorial_doc");
//bring Routers
const document_router = require("./routes/documents");
// Test DB
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));
// Load env vars

const app = express();

// Body parser
app.use(express.json());
app.use("/v1/documents", document_router);
const PORT = process.env.PORT || 5000;

document
  .sync()
  .then(() => {
    console.log("Document Model synced");
  })
  .catch((err) => {
    console.log(err);
  });

researchDocument
  .sync()
  .then(() => {
    console.log("Document Model synced");
  })
  .catch((err) => {
    console.log(err);
  });
tutorialDocument
  .sync()
  .then(() => {
    console.log("Document Model synced");
  })
  .catch((err) => {
    console.log(err);
  });
const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
