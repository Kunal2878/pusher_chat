// import Pusher from 'pusher-js';
// require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const chat = require("./routes/chat");
const Pusher = require('pusher');
const pusher = new Pusher({
  appId: "1813007",
  key: "e01912a32c34c280e6eb",
  secret: "6bcb8f5f082d93a4ba8c",
  cluster: "ap2",
  useTLS: true
});
app.use(cors({ origin: true })); // Adjust origin as needed
app.use(express.json());
app.use("/chat", chat);
app.post("/chat", async (req, res, next) => {
  const { mesg } = req.body;
  console.log(req.body)
  console.log(mesg.room_name)

  try {
    await pusher.trigger(mesg.room_name, 'new-message', { mesg });
    res.json({ message: mesg });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send message' });
  }
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`,process.env.PUSHER_CLUSTER);
});
console.log("Server listening on vercel");
// module.exports = app;


// pusher.trigger("my-channel", "my-event", {
//   message: "hello world"
// });
// Example route to trigger a Pusher event
// app.post('/api/chat', (req, res) => {
//   const { message } = req.body;

//   pusher.trigger('chat-channel', 'new-message', { message });
//   res.json({ message: 'Message sent successfully' });
// });

// Start the server