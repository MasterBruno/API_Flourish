const { Model, DataTypes } = require('sequelize');

class Post extends Model {
  static init(sequelize) {
    super.init ({
      description_post: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      dream_id: DataTypes.INTEGER,
    },{
      sequelize,
      tableName: 'posts',
    })
    return this
  }
}

Post.associate = function(models) {
  Post.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
  Post.belongsTo(models.Dream, {foreignKey: 'dream_id', as: 'dream'})
  Post.hasMany(models.Comment, {as: 'comments'})
}

module.exports = Post;