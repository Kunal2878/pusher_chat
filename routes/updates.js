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

  const {room} = req.body;



  try {

    await pusher.trigger(room, 'alert', room);
    res.json({ message: 'Alert sent  successfully ' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send alert from chat' });
  }
 
}
);


module.exports = router;