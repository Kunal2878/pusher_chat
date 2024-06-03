// import Pusher from 'pusher-js';
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const Pusher = require('pusher');
// const pusher = new Pusher({
//   appId:    process.env.PUBLIC_PUSHER_APP_ID,
//   key:      process.env.PUBLIC_PUSHER_KEY,
//   secret:   process.env.PUBLIC_PUSHER_SECRET,
//   cluster:  process.env.PUBLIC_PUSHER_CLUSTER,
//   useTLS: true
// });
const pusher = new Pusher({
  appId: "1813007",
  key: "e01912a32c34c280e6eb",
  secret: "6bcb8f5f082d93a4ba8c",
  cluster: "ap2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});



const app = express();
// const port = process.env.PORT || 3000;

// Replace with your Pusher credentials

// CORS configuration (if necessary)
app.use(cors({ origin: true })); // Adjust origin as needed

// Example route to trigger a Pusher event
// app.post('/api/chat', (req, res) => {
//   const { message } = req.body;

//   pusher.trigger('chat-channel', 'new-message', { message });
//   res.json({ message: 'Message sent successfully' });
// });

// Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`,process.env.PUSHER_CLUSTER);
// });
console.log("Server listening on vercel");
module.exports = app;