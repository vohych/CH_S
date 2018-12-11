var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 80;
var status;
var m = 0;
var con = 0;
var disable;
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  //status
  status = m++;
  if(status < 2 && status >= 0){
  console.log(status);
  }
  if(status > 1){
    // res.send({text: 'Your name is '})
    disable = status;
    // port = 90;
    // console.log(port);
    // close;
    socket.on('disable', function (disable) {
      io.emit('disable', disable);
      // console.log(disable);
      
      
    // io.send('Your name is ')

    });
  }
  socket.on('con', function (con) {
    io.emit('con', con)
    con++;
  });

  socket.on('disconnect', function () {
    status = "disconnected" + m--;
    console.log(status);
  });

  //    
  // socket.on('name', function (name) {
  //   socket.broadcast.emit('name', name);

  // })
  socket.on('chat message', function (msg) {

    io.emit('chat message', msg);
    //
  });
  // 
  socket.on('aaa', function (s, checkerId) {
  io.sockets.emit('aaa', s, checkerId);

  });

})
// console.log(io);


http.listen(port, function () {
  console.log('port on *:' + port + '');

});


