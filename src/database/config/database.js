module.exports = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'db_user',
    password: 'db_1234',
    database: 'db_flourish',
    define: {
        timestamps:true,
        underscored: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
}