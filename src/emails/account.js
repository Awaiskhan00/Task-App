// const nodemailer = require('nodemailer');

// const sendMail = (email, name) => {
//   // Configure the transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: '@gmail.com',
//       pass: 'use 16 digit password',
//     },
//   });

//   // Email options
//   const mailOptions = {
//     from: '@gmail.com',
//     to: email,
//     subject: 'Thanks for joining in!',
//     text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//     } else {
//       console.log('Email sent:', info.response);
//       console.log('Message sent:', info.messageId); // Move this line inside the callback
//     }
//   });
// };

// //////////////////////////////////////////////////////////

// const sendCancelationEmail = (email, name) => {
//   // Configure the transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'xyz@gmail.com',
//       pass: '',
//     },
//   });

//   // Email options
//   const mailOptions = {
//     from: '',
//     to: email,
//     subject: 'Sorry to see you go!',
//     text: `Goodbye ${name}. I hope to see you back sometime soon`,
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//     } else {
//       console.log('Email sent:', info.response);
//       console.log('Message sent:', info.messageId); // Move this line inside the callback
//     }
//   });
// };

// module.exports = {
//     sendMail,
//     sendCancelationEmail
// }

const nodemailer = require("nodemailer");

// Securely access credentials from environment variables
const user = process.env.NODEMAILER_USER;
const pass = process.env.NODEMAILER_PASS;

// Single transporter instance for reusability
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user, pass },
});

const sendEmail = async (email, name, subject, text) => {
  try {
    const mailOptions = {
      from: "",
      to: email,
      subject,
      text, // Consider using HTML formatting for richer content
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${email}!`);
  } catch (error) {
    console.error(`Error sending email to ${email}:`, error);
  }
};

module.exports = {
  sendWelcomeEmail: (email, name) =>
    sendEmail(
      email,
      name,
      `Thanks for joining in!, Welcome to the app, ${name}. Let me know how you get along with the app.`
    ),
  sendCancelationEmail: (email, name) =>
    sendEmail(
      email,
      name,
      `Sorry to see you go!, 'Goodbye ${name}. I hope to see you back sometime soon.`
    ),
};
