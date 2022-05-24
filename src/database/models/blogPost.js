module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
    },
  }, {
    updatedAt: 'updated',
    createdAt: 'published'
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,{
      foreignKey: 'userId', as: 'user'
    })
  };

  return BlogPost;
}