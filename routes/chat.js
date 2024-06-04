const express = require("express");
const router = express.Router();
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

router.post("/chat", async (req, res, next) => {
  const { message } = req.body;


  try {
    await pusher.trigger('chat-channel', 'new-message', { message });
    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send message' });
  }
});
router.post("/", async (req, res, next) => {
  const { message } = req.body;


  try {
    await pusher.trigger('chat-channel', 'new-message', { message });
    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send message' });
  }
});
// router.get("/", async (req, res, next) => {
//   return res.status(200).json({
//     title: "Express Testing",
//     message: "The app is working properly!",
//   });
// });

module.exports = router;