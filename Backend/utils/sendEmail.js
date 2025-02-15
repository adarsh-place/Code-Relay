const nodemail = require("nodemailer");
const { senderEmail, emailPassword } = require("../config/kyes");

const sendEmail = async ({ emailTo, subject, code, content }) => {
  const transporter = nodemail.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: senderEmail,
      pass: emailPassword,
    },
  });

  const message = {
    from: senderEmail,
    to: emailTo,
    subject,
    html: `
        <div>
          <h2>Alert!</h2>
          <h3>Use this below code to ${content}</h3>
          <p><strong>Code: </strong> ${code}</p>
        </div>
      `,
  };

  try {
    await transporter.sendMail(message);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendEmail;
