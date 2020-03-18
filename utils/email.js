const nodemailer = require('nodemailer');

const sendEmail = options => {
  // 1. Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
    // Activate in gmail "less secure app" option
  });
  // 2 Define email options
  // 3. Send emails with nodemailer
};
