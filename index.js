const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET'
});
 
app.post('/send', (req, res) => {
  // Send SMS
  nexmo.message.sendSms(
    'YOUR_VIRTUAL_NUMBER', 'ToNumber', 'Message',
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      }
   )
});

const server = app.listen(3000);
 