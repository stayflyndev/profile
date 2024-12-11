// server/index.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = 5000;

// Middleware
app.use(cors(
    {
        origin: 'http://localhost:3000', // Allow requests from React frontend
  methods: ['GET', 'POST'],
    }
));
app.use(bodyParser.json());

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',    // AOL's SMTP server
    port: 465,               // SSL port (you can use 587 for TLS)
    secure: true,  
  auth: {
    user: process.env.SMTP_USER, // Your email address
    pass: process.env.SMTP_PASS, // Your email password or app-specific password
  },
});

transporter.sendMail({
    from: 'tee.ada@aol.com',   // Replace with your AOL email
    to: 'tee.ada@aol.com', // Recipient's email
    subject: '🦄🦄🦄🦄🦄🦄',
    text: 'The gag is ______. I want you on my album.',
  }, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info);
    }
  });

// POST route to handle form submission
app.post("/api/send-email", (req, res) => {
  const { fname, email, message, lname } = req.body;

  const mailOptions = {
    from: email,
    to: "tee.ada@aol.com", // Where the email will be sent
    subject: `🗣 MUSSSSSTAAAAAAARD ${fname}`,
    text: `You have received a new message from ${fname} (${email}):\n\n${message}\n\ + " " 🔥🔥🔥🔥🔥`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email" });
    }
    console.log("Email sent:", fname + lname);
    res.status(200).json({ message: "Email sent successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
