const express = require('express');
const path = require('path'); 
const mime = require('mime');
const fs = require('fs');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require("socket.io");
const io = new Server(server);
const riverSocket = require("./riversocket");

app.set(path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.use(express.static(__dirname + '/node_modules'))

app.use('/blockly', express.static(path.join(__dirname, 'node_modules/blockly')));

// index page
app.get('/', function(req, res) {
  res.render('pages/editor');
});

app.get('/download', function(req, res){

  var file = req.query.file;

  var filename = path.basename(file);
  var mimetype = mime.lookup(file);

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("pair", (data) => {
    socket.join(data.room);
    socket.to(data.room).emit("pair_success", {room: data.room, content: `Pairing success with ${data.room}`});
    socket.emit("pair_success", {room: data.room, content: `${data.room} connected!`});
  });

  socket.on("run", (data) => {
    socket.to(data.room).emit('run', data);
  });

  socket.on("stdout", (data) => {
    console.log("stdout", data);
    socket.to(data.room).emit("stdout", data)
  });

  // Deprecated
  socket.on("room", function (data) {
    socket.join(data);
    socket.to(data).emit("room", "Pairing Success!");
  });

  socket.on("process", function (data) {
    console.log(data);
  });

  socket.on("log", function (data) {
    console.log(data);
    socket.to(data.room).emit("log", data);
  });

  riverSocket.createPythonFile(socket);
  riverSocket.createCodeFile(socket);
  riverSocket.nsp(socket);
  socket.on("disconnect", () => {
    console.log("a user disconnected!!"); // undefined
  });
});



server.listen(3001, () => {
  console.log('listening on *:3001');
});