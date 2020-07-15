//app nodejs Repuestos --
import express, { json } from 'express';
import morgan from 'morgan';//middleware de registrador de solicitudes HTTP
import cors from 'cors';//cabeceras

//cargamos las rutas creadas en la carpeta routes
import userRoutes from './src/routes/user.routes';


//Server express

const app = require('express')();

var server = require('http').createServer(app);
app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});


// middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors());
app.use(express.static('public'));



app.use('/api/users', userRoutes);



http.listen(3000, function () {
    console.log('listening on *:3000');
});
