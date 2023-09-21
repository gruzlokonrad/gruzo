import nodemailer from "nodemailer";

// Send from user to admin
export async function sendMail({subject, personEmail, name, textMessage}) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    to: 'hello@gruzo.dev',
    subject: `${subject} od ${personEmail}`,
    text: `${name}: ${textMessage}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      return true;
    }
  });
}