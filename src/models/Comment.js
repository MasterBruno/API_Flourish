const { Model, DataTypes } = require('sequelize')

class Comment extends Model {
  static init (sequelize) {
    super.init({
      text_comments: DataTypes.STRING,
      post_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER
    }, {
      sequelize,
      tableName: 'comments'
    })
    return this
  }
}

Comment.associate = function (models) {
  Comment.belongsTo(models.Post, { foreignKey: 'post_id', as: 'post' })
  Comment.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
}

module.exports = Comment
