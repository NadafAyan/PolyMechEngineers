const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const app = express();
const cors = require("cors");

const accountSid = "AC99b49737cb7f0633a3a4e4ee8fb39979";
const authToken = "82fb0d2c846f33001a37569cb8f16469";
const client = new twilio(accountSid, authToken);

app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["POST"],
  credentials: true,
}));

app.post("/send-whatsapp", (req, res) => {
  const { name, email, phone, message } = req.body;

  const text = `
New Contact Form Submission from polymechengineers.com:
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
📝 Message: ${message}
  `;

  client.messages
    .create({
      body: text,
      from: "whatsapp:+14155238886",
      to: "whatsapp:+919359182996", 
    })
    .then((message) => {
      console.log("Message sent:", message.sid);
      res.status(200).send("Message sent via WhatsApp");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Failed to send message");
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));

app.get("/", (req, res) => {
  res.send("Server running...");
});