const { Model, DataTypes } = require('sequelize');

class Comment extends Model {
  static init(sequelize) {
    super.init ({
      text_comments: DataTypes.STRING,
      id_post: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Post',
          key: 'id',
        }
      },
      id_user: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        }
      }
    },{
      sequelize,
      tableName: 'comments',
    })

    return this
  }
}

module.exports = Comment;