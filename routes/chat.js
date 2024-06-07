const express = require("express");
const router = express.Router();
const Pusher = require('pusher');
const { createClient } = require('@supabase/supabase-js');

const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Replace with your Supabase project URL
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // Replace with your Supabase public key

const supabase = createClient(supabaseUrl, supabasePublicKey);

const pusher = new Pusher({
  appId:    process.env.PUBLIC_PUSHER_APP_ID,
  key:      process.env.PUBLIC_PUSHER_KEY,
  secret:   process.env.PUBLIC_PUSHER_SECRET,
  cluster:  process.env.PUBLIC_PUSHER_CLUSTER,
  useTLS: true
});



router.post("/", async (req, res, next) => {

  // const {message,room,email,time} = req.body;
  const mesg = req.body;
  console.log(mesg)
  const message=mesg.message
  const room=mesg.room
  const sender=mesg.sender
  const time=mesg.time

  try {

    // await pusher.trigger(room, 'new-message', { message });
    await pusher.trigger(room, 'new-message', mesg);
    res.json({ message: 'Message  successfully sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send message' });
  }
  // const chat_data=
  //   {
  //     sender:sender,
  //     message:message,
  //     room:room,
      
  //   }
  
  // const { data, error } = await supabase.from('Chat').insert([chat_data]);

  // if (error) {
  //   console.error('Error inserting data:', error);

  // } else {
  //   console.log('Data inserted successfully:', data);

  // }
}
);


module.exports = router;