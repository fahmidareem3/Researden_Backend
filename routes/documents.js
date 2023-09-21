const express = require("express");

const {
  createDocument,
  getAllDocuments,
  getDocument,
} = require("../controller/documents");

const router = express.Router();

router.route("/").post(createDocument).get(getAllDocuments);
router.route("/:id").get(getDocument);

module.exports = router;
