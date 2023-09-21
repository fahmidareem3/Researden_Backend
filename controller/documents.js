const Document = require("../models/documents");

exports.createDocument = async (req, res, next) => {
  try {
    const createdDocument = await Document.create(req.body);
    // Assuming you want to send a response indicating success
    res.status(201).json(createdDocument);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getDocument = async (req, res, next) => {
  try {
    const { id } = req.params;
    const document = await Document.findByPk(id);

    if (!document) {
      return res.status(404).json({ error: "Document not found" });
    }

    res.json(document);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllDocuments = async (req, res, next) => {
  try {
    const documents = await Document.findAll();

    // Create a response object with documents and length
    const response = {
      count: documents.length,
      documents: documents,
    };

    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
