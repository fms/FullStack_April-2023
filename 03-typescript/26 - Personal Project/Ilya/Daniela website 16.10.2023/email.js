const nodemailer = require("nodemailer");

const sendEmail = async (mailDetails) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "autopsiamonster@gmail.com",
            pass: "your-password",
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    try {
        console.log("Sending your email...");
        await transporter.sendMail(mailDetails);
        console.log(`Email sent successfully to ${mailDetails.to}`);
    } catch (error) {
        console.log("Sorry, failed to send your email!");
    }
}

sendEmail({
    from: "sender-email-address",
    to: "receiver-email-address",
    subject: "Test Email via NodeJS using Nodemailer",
    text: "Hi, there...This is a test email sent via NodeJS App using Nodemailer."
});