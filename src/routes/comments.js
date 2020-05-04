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

//Show all comments
router.get('/', (req, res) => {
	execSQLQuery('SELECT * FROM comment', res);
});

//Show one comment
router.get('/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE id_comment=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM comment' + filter, res);
});

//Delete one comment
router.delete('/:id', (req, res) =>{
    execSQLQuery('DELETE FROM comment WHERE id_comment=' + parseInt(req.params.id), res);
});

//Insert one comment
router.post('/', (req, res) =>{
    const text_comment = req.body.text_comment;

    let created_at = req.body.created_at;

    let updated_at = req.body.updated_at;

    const id_post = parseInt(req.body.id_post);

    const id_user = parseInt(req.body.id_user);

    execSQLQuery(`INSERT INTO comment(text_comment, created_at, updated_at, id_post, id_user) VALUES('${text_comment}', '${created_at}', '${updated_at}', ${id_post}, ${id_user})`, res);
});

//Update one comment
router.patch('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    
    const text_comment = req.body.text_comment;

    let created_at = req.body.created_at;

    let updated_at = req.body.updated_at;

    const id_post = parseInt(req.body.id_post);

    const id_user = parseInt(req.body.id_user);


    execSQLQuery(`UPDATE comment SET text_comment = '${text_comment}', created_at = '${created_at}', updated_at = '${updated_at}', id_post = ${id_post}, id_user = ${id_user} WHERE id_comment=${id}`, res);
})

module.exports = router;  