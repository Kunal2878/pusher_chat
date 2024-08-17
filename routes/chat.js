const express = require("express");
const router = express.Router();
const Pusher = require('pusher');


const pusher = new Pusher({
  appId:    process.env.PUBLIC_PUSHER_APP_ID,
  key:      process.env.PUBLIC_PUSHER_KEY,
  secret:   process.env.PUBLIC_PUSHER_SECRET,
  cluster:  process.env.PUBLIC_PUSHER_CLUSTER,
  useTLS: true
});



router.post("/", async (req, res, next) => {

  const mesg = req.body;

  const message=mesg.message
  const room=mesg.room
  const sender=mesg.sender
  const time=mesg.time

  try {
console.log(mesg,room)
    // await pusher.trigger(room, 'new-message', { message });
    await pusher.trigger(room, 'new-message', mesg);
    res.json({ message: 'Message  successfully sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send message from chat' });
  }
 
}
);


module.exports = router;