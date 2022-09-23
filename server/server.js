const express = require('express');
require('dotenv').config();
const cors = require('cors');
const port = 8000;
const {userRouter} = require('./routes/user.routes')
const {authRouter} = require('./routes/auth.routes')
const { groupRouter } = require('./routes/group.routes');



require('./config/mongoose.config');

const app = express();
// const http = require('http').createServer();
// const io = require('socket.io')(http, {
//   cors: { origin: "*" }
// });
// const socketIo = require('socket.io')(server, { cors: true });
// io.on("connection", socket => {
//   console.log(socket.id);
//   socket.on("event_from_client", data => {
//     socket.broadcast.emit("send_data_to_all_other_clients", data);
//   });
// });
// const http = require('http').createServer();

// const io = require('socket.io')(http, {
//     cors: { origin: "*" }
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('message', (message) =>     {
//         console.log(message);
//         io.emit('message', `${socket.id.substr(0,2)} said ${message}` );   
//     });
// });
app.use(cors());
app.use(express.json());

app.use('/api/groups', groupRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
// app.use('/', (req, res)=>{
//   return res.send();
// })
app.listen(port, () =>
console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);
