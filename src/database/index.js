const Sequelize = require('sequelize');
const dbConfig = require('./config/database');

const User = require('../models/User');
const Role = require('../models/Role');
const StatusDream = require('../models/StatusDream');
const Dream = require('../models/Dream');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

const models = [User, Role, StatusDream, Dream, Post, Comment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

module.exports = new Database();