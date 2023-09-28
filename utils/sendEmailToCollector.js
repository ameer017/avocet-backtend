const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  auth: {
    user: 'avocetsolutions@outlook.com',
    pass: 'amee#98R',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmailToCollector = async (
  email, 
  type,
  weight,
  address,
  amount,
  phone,
  status,
  id
  ) => {
  return new Promise(async (resolve, reject) => {
    try {
      const emailContent = `
        <h1>Hello from Avocet - the following order was made by a seller!!</h1>
        <p>Type: ${type}</p>
        <p>Weight: ${weight} kg</p>
        <p>Address: ${address}</p>
        <p>Amount: # ${amount}</p>
        <p>Phone: ${phone}</p>
        <p>Status: ${status}</p>
      `;

      console.log(emailContent)

      const mailOptions = {
        from: 'avocetsolutions@outlook.com',
        to: email,
        subject: `An Avocet Order was created`,
        html: emailContent,
      };

      await transporter.sendMail(mailOptions);

      console.log("Order creation Email sent to the collector");
      
      resolve();
    } catch (error) {
      console.error("Error sending email to collector:", error);
      reject(error);
    }
  });
};

module.exports = sendEmailToCollector;
