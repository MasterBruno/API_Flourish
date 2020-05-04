const { Model, DataTypes } = require('sequelize');

class Post extends Model {
  static init(sequelize) {
    super.init ({
      description_post: DataTypes.STRING,
    },{
      sequelize,
      tableName: 'posts',
    })

    return this
  }
}

module.exports = Post;