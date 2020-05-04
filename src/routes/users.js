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

//Show all users
router.get('/', (req, res) => {
	execSQLQuery('SELECT * FROM user', res);
});

//Show one user
router.get('/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE id_status=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM user' + filter, res);
});

//Delete one user
router.delete('/:id', (req, res) =>{
    execSQLQuery('DELETE FROM user WHERE id_user=' + parseInt(req.params.id), res);
});

//Insert one user
router.post('/', (req, res) =>{
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;

    let birth_date = req.body.birth_date;

    let created_at = req.body.created_at;

    let updated_at = req.body.updated_at;

    const id_role = parseInt(req.body.id_role);

    execSQLQuery(`INSERT INTO user(first_name, last_name, email, password, birth_date, created_at, updated_at, id_role) VALUES('${first_name}', '${last_name}', '${email}', '${password}', '${birth_date}', '${created_at}', '${updated_at}', ${id_role})`, res);
});

//Update one user
router.patch('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;

    let birth_date = req.body.birth_date;

    let created_at = req.body.created_at;

    let updated_at = req.body.updated_at;

    const id_role = parseInt(req.body.id_role);


    execSQLQuery(`UPDATE user SET first_name = '${first_name}', last_name = '${last_name}', email = '${email}', password = '${password}', birth_date = '${birth_date}', created_at = '${created_at}', updated_at = '${updated_at}', id_role = ${id_role} WHERE id_user=${id}`, res);
})

module.exports = router;  