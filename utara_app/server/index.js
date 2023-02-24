
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
app.use('/upload', express.static('upload'))


const connectDB = require('./config/dbconfing');
const { AsyncLocalStorage } = require('async_hooks');
const PORT = 3500;

//Connect to MongoDB

connectDB.connect((err)=> {
    if(err) {
        console.log("connection failed",err);
    }else{ 
        console.log("Database Connected"); 
    }
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/', require('./routes/root'));
//app.use('/api/register', require('./routes/register'));
//app.use('/api/auth', require('./routes/auth'));
//app.use('/api/refresh', require('./routes/refresh'));
//app.use('/api/logout', require('./routes/logout'));
app.use('/api/getregisterdata', require('./routes/register/registerdata'));
app.use('/api/quick', require('./routes/Quick/Quickregisterdata'));
app.use('/api/categories', require('./routes/Categories/Categories'));
app.use('/api/user', require('./routes/User/User'));
app.use('/api/addtodolist', require('./routes/addtodolist/addtodolist'));
app.use('/api/Form', require('./routes/Form/Form'));


app.get("/api/me", (req, res) => {
    console.log('ohk got it')
    res.send('ohk got it')
})
app.post("/api/create", (req, res) => {

    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;


    const sqlInsert = "INSERT INTO `employeesystem` (name , age, country, position, wage ) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [name, age, country, position, wage], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("values inserted");
        }
    });
});
app.get("/api/employee", (req, res) => {
    const sqlSelect = "SELECT * FROM `employeesystem`";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ error: '404 Not Found' });
    } else {
        res.type('txt').send('404 Not Found');
    }
})




//app.use(errorHandler)



app.listen(PORT, () => {
    console.log(
        "Node server(Utara-server) started in",
        PORT
    );
});

