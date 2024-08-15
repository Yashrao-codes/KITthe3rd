module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  });

  Article.associate = (models) => {
    Article.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Article;
};
