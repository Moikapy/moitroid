import fs from 'fs';
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';

const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

dotenv.config();
const port = process.env.PORT || 8081;
app.use(cors());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});
app.use('/', express.static('.'));
app.use('/', express.static('./public'));
// Sets what Port the Server is listening on
app.listen(port, () => {
	console.log(`Listening to http://localhost:${port}`);
});

io.on('connection', function(socket) {
	console.log('a user connected');
});

io.on('disconnected', function(socket) {
	console.log('a user disconnected');
});
