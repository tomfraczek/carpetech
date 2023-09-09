import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log(res);
  //   if (req.method === 'POST') {
  //     try {
  //       const { name, email, message } = req.body;

  //       // Create a transporter object using your email service credentials
  //       const transporter = nodemailer.createTransport({
  //         service: 'gmail', // e.g., 'Gmail' or 'SendGrid'
  //         auth: {
  //           user: process.env.NODEMAILER_EMAIL,
  //           pass: process.env.NODEMAILER_PW,
  //         },
  //       });

  //       // Email data
  //       const mailOptions = {
  //         from: process.env.NODEMAILER_EMAIL,
  //         to: 'recipient-email@example.com',
  //         subject: 'New contact form submission',
  //         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  //       };

  //       // Send the email
  //       await transporter.sendMail(mailOptions);

  //       res.status(200).json({ message: 'Email sent successfully' });
  //     } catch (error) {
  //       console.error('Error sending email:', error);
  //       res.status(500).json({ message: 'Error sending email' });
  //     }
  //   } else {
  //     res.status(405).json({ message: 'Method not allowed' });
  //   }
}
