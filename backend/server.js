const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { Resend } = require("resend");

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(bodyParser.json());

const allowedOrigins = [
   "http://localhost:5173",
  "https://polymechengineers.vercel.app",
   "https://www.polymechengineers.com",
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin.replace(/\/$/, ""))) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["POST"],
  credentials: true,
}));

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Polymech Engineers <onboarding@resend.dev>',
      to: process.env.RECEIVER_EMAIL, // Your email address
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).send("Failed to send email.");
    }

    console.log("Email sent:", data);
    res.status(200).send("Email sent successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to send email.");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

app.get("/", (req, res) => {
  res.send("Server running...");
});
