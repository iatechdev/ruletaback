//app nodejs Repuestos --
import express, {
  json
} from 'express';
import morgan from 'morgan'; //middleware de registrador de solicitudes HTTP
import cors from 'cors'; //cabeceras

import userRoutes from './src/routes/user.routes';

const app = require('express')();

var server = require('http').createServer(app);;
var io = require('socket.io')(server);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
});
app.use(morgan('dev'));
app.use(json());
app.use(cors());
app.use(express.static('public'));
app.use('/api/ruleta', userRoutes);

server.listen(4003, function () {
  console.log('listening on *:4003');
});