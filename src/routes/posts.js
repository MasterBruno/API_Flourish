var express = require('express');
const app = express();  

var router = express.Router();


/* GET Listagem status_dream. */
/*
router.get('/', function(req, res, next) {
    res.send('Rota status_dream!')
});
*/
/* GET Busca status_dream por id. */
/*
router.get('/:id', function(req, res, next) {
    res.send('Rota status_dream!')
});

*/


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

//Show all posts
router.get('/', (req, res) => {
	execSQLQuery('SELECT * FROM post', res);
});

//Show one post
router.get('/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE id_post=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM post' + filter, res);
});

//Delete one post
router.delete('/:id', (req, res) =>{
    execSQLQuery('DELETE FROM post WHERE id_post=' + parseInt(req.params.id), res);
});

//Insert one post
router.post('/', (req, res) =>{
    const description_post = req.body.description_post;

    let created_at = req.body.created_at;

    let updated_at = req.body.updated_at;

    execSQLQuery(`INSERT INTO post(description_post, created_at, updated_at) VALUES('${description_post}', '${created_at}', '${updated_at}')`, res);
});

//Update one post
router.patch('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    
    const description_post = req.body.description_post;

    let created_at = req.body.created_at;

    let updated_at = req.body.updated_at;


    execSQLQuery(`UPDATE post SET description_post = '${description_post}', created_at = '${created_at}', updated_at = '${updated_at}' WHERE id_post=${id}`, res);
})

module.exports = router;  