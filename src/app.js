var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var roleRouter = require('./routes/role');
var postsRouter = require('./routes/posts');
var commentsRouter = require('./routes/comments');
var dreamRouter = require('./routes/dream');
var status_dreamRouter = require('./routes/status_dream');


var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/role', roleRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/dream', dreamRouter);
app.use('/status_dream', status_dreamRouter);



const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host     : 'localhost',
        port     : 3306,
        user     : 'root',
        password : 'teste123',
        database : 'SistemaBD'
    });

    connection.query(sqlQry, function(error, results, fields){
        if(error) 
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('executou!');
    });
}

//const mysql = require('mysql');

//const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

/*
function execSQLQuery(sqlQry, res){
	const connection = mysql.createConnection({
		host     : 'localhost',
		port     : 3306,
		user     : 'root',
		password : 'teste123',
		database : 'SistemaBD'
	});

	connection.query(sqlQry, function(error, results, fields){
		if(error) 
			res.json(error);
		else
			res.json(results);
		connection.end();
		console.log('executou!');
	});
}

*/



module.exports = app;
