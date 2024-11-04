const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

export const sendSMSNotification = (message, to) => {
  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER, // Twilio-provided number
      to: to, // recipient's phone number
    })
    .then((message) => console.log("SMS sent successfully:", message.sid))
    .catch((error) => console.error("Error sending SMS:", error));
};
