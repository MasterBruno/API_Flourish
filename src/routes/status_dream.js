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


router.get('/', (req, res) => {
	execSQLQuery('SELECT * FROM status_dream', res);
});


router.get('/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE id_status=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM status_dream' + filter, res);
});

router.delete('/:id', (req, res) =>{
    execSQLQuery('DELETE FROM status_dream WHERE id_status=' + parseInt(req.params.id), res);
});

router.post('/', (req, res) =>{
    const description_status = req.body.description_status.substring(0,45);
    execSQLQuery(`INSERT INTO status_dream(description_status) VALUES('${description_status}')`, res);
});

router.patch('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const description_status = req.body.description_status.substring(0,45)
    execSQLQuery(`UPDATE status_dream SET description_status='${description_status}' WHERE id_status=${id}`, res);
})

module.exports = router;  