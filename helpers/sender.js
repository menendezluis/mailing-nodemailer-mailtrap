const nodemailer = require("nodemailer");
const data = require("../data");

// async..await is not allowed in global scope, must use a wrapper

async function Sender(props) {
  const { name, email, user } = props;
  //console.log(emailTemplate);
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "119227d8e9e300",
      pass: "f0a9b5231f81b6"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: email, // list of receivers
    subject: `Hello ${name}🥳✔`, // Subject line
    text: "Hello world?", // plain text body
    html: data.emailTemplate(name) // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = { Sender };
