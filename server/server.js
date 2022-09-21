const express = require('express');
require('dotenv').config();
const cors = require('cors');
const port = 8000;
const {userRouter} = require('./routes/user.routes')
const {authRouter} = require('./routes/auth.routes')
const { groupRouter } = require('./routes/group.routes');

// const io = require('socket.io')(server, { cors: true });

require('./config/mongoose.config');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/groups', groupRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);

// io.on("connection", socket => {
//   console.log(socket.id);
//   socket.on("event_from_client", data => {
//     socket.broadcast.emit("send_data_to_all_other_clients", data);
//   });
// });