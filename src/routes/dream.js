

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

//Transform the data to json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Make the conection to DB
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

//Route to select all dreams
router.get('/', (req, res) => {
	execSQLQuery('SELECT * FROM dream', res);
});

//Route to return one dream determined
router.get('/:id?', (req, res) =>{
    let filter = '';
    
    if(req.params.id) filter = ' WHERE id_dream=' + req.params.id;
    execSQLQuery('SELECT * FROM dream' + filter, res);
});

//Route to delete a dream
router.delete('/:id', (req, res) =>{
    execSQLQuery('DELETE FROM dream WHERE id_dream=' + req.params.id, res);
});

//Route to create a dream
router.post('/', (req, res) =>{
    let dataString = req.body.realization_at;

    realization_at = dataString.split('-');

    const description_dream = req.body.description_dream;
    //const realization_at = req.body.realization_at.Date(0,45);
    const limit_value = parseFloat(req.body.limit_value);
    const id_status = parseInt(req.body.id_status);
    //execSQLQuery(`INSERT INTO dream(description_dream, realization_at, limit_value, id_status) VALUES('${description_dream}', '${realization_at}', '${limit_value}', ''${id_status}'')`, res);
    execSQLQuery(`INSERT INTO dream(description_dream, realization_at, limit_value, id_status) VALUES('${description_dream}', '${realization_at}', ${limit_value}, ${id_status})`, res);
});

//Route to update a dream
router.patch('/:id', (req, res) =>{
    const id = parseInt(req.params.id);

    let dataString = req.body.realization_at;

    realization_at = dataString.split('-');

    const description_dream = req.body.description_dream;
    
    //const realization_at = req.body.description_status.Date(0,45);
    
    const limit_value = parseFloat(req.body.limit_value);
    const id_status = parseInt(req.body.id_status);
    //execSQLQuery(`UPDATE dream SET description_dream='${description_dream}', realization_at='${realization_at}', limit_value='${limit_value}', id_status='${id_status}' WHERE id_dream=${id}`, res);
    execSQLQuery(`UPDATE dream SET description_dream='${description_dream}', realization_at='${realization_at}', limit_value='${limit_value}', id_status='${id_status}' WHERE id_dream=${id}`, res);
})

module.exports = router; 