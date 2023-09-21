const Sequelize = require("sequelize");
const Document = require("./documents");

class ResearchDocument extends Document {}

ResearchDocument.init(
  {
    researchTopic: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    citations: {
      type: Sequelize.INTEGER,
    },
  },
  {
    sequelize: Document.sequelize,
    modelName: "researchDocument",
  }
);

module.exports = ResearchDocument;
