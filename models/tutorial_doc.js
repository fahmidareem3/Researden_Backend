const Sequelize = require("sequelize");
const Document = require("./documents");

class TutorialDocument extends Document {}

TutorialDocument.init(
  {
    tutorialType: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    duration: {
      type: Sequelize.INTEGER,
    },
  },
  {
    sequelize: Document.sequelize,
    modelName: "tutorialDocument",
  }
);

module.exports = TutorialDocument;
