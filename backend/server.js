const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const port = 5000;

// Security middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5000"],
  credentials: true
}));
app.use(express.json({ limit: "10kb" }));

// Security headers
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

// Rate limiting to prevent spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: "Too many requests, please try again later"
});

// Social links endpoint
const socialLinks = {
    linkedin: "https://www.linkedin.com/in/core-codestudio-a917983b2",
    github: "https://github.com/codestudiocore-source",
    whatsapp: "https://wa.me/923270218838"
};

app.get("/api/social", (req, res) => {
    res.json(socialLinks);
});

// Contact form endpoint
app.post("/send", limiter, async (req, res) => {
  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format" });
  }

  if (name.length > 100 || message.length > 5000) {
    return res.status(400).json({ success: false, message: "Input too long" });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Portfolio Contact from ${name}`,
      text: message,
      replyTo: email
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});