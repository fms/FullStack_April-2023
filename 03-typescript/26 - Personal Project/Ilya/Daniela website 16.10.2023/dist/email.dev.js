"use strict";

var nodemailer = require("nodemailer");

var sendEmail = function sendEmail(mailDetails) {
  var transporter;
  return regeneratorRuntime.async(function sendEmail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
              user: "autopsiamonster@gmail.com",
              pass: "your-password"
            },
            tls: {
              rejectUnauthorized: false
            }
          });
          _context.prev = 1;
          console.log("Sending your email...");
          _context.next = 5;
          return regeneratorRuntime.awrap(transporter.sendMail(mailDetails));

        case 5:
          console.log("Email sent successfully to ".concat(mailDetails.to));
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log("Sorry, failed to send your email!");

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

sendEmail({
  from: "sender-email-address",
  to: "receiver-email-address",
  subject: "Test Email via NodeJS using Nodemailer",
  text: "Hi, there...This is a test email sent via NodeJS App using Nodemailer."
});