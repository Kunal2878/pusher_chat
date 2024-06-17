// import Pusher from 'pusher-js';
// require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const chat = require("./routes/chat");
const updates = require("./routes/updates");
const Pusher = require('pusher');

app.use(cors({ origin: true })); // Adjust origin as needed
app.use(express.json());
app.use("/chat", chat);
app.use("/updates", updates);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`,process.env.PUSHER_CLUSTER);
});
console.log("Server listening on vercel");
