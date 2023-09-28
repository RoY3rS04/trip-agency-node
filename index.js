import express from 'express'
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//connect to db

db.authenticate()
    .then(() => console.log('connected correctly'))
    .catch((error) => console.log(error))

const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Get actual date
app.use((req, res, next) => {

    const year = new Date();

    res.locals.year = year.getFullYear();
    res.locals.pageName = 'Agencia de Viajes';

    next();
})

//Add the body parser 
app.use(express.urlencoded({ extended: true }));

//add router to app
app.use('/', router);

//define public directory
app.use(express.static('./public'))

app.listen(port, () => {
    console.log(`el servidor esta corriendo en el puerto ${port}`)
})