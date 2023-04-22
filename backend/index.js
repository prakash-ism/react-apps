const express = require('express');
const app = express();
// const cors = require('cors');
// app.use(cors({
//     origin: 'http://localhost:3000'
// }));
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
      }
});

io.on('connection', (socket) => {
    console.log('Connected');

    socket.on('play', playMsg => {
        io.emit("play", playMsg);
    });

    socket.on('stop', msg => {
        io.emit("stop");
    });
})

server.listen(3001, () => {
    console.log("listening on 3001");
});