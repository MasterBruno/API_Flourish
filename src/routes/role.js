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

//Show all roles
router.get('/', (req, res) => {
	execSQLQuery('SELECT * FROM role', res);
});

//Show one role
router.get('/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE id_role=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM role' + filter, res);
});

//Delete one role
router.delete('/:id', (req, res) =>{
    execSQLQuery('DELETE FROM role WHERE id_role=' + parseInt(req.params.id), res);
});

//Insert one role
router.post('/', (req, res) =>{
    const description_role = req.body.description_role;
    execSQLQuery(`INSERT INTO role(description_role) VALUES('${description_role}')`, res);
});

//Update one role
router.patch('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const description_role = req.body.description_role;
    execSQLQuery(`UPDATE role SET description_role='${description_role}' WHERE id_role=${id}`, res);
})

module.exports = router;  