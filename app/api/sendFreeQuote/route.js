// export default function POST(req, res) {
//   require('dotenv').config();

//   let nodemailer = require('nodemailer');
//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: 'smtp.gmail.com',
//     auth: {
//       user: process.env.NODEMAILER_EMAIL,
//       pass: process.env.NODEMAILER_PW,
//     },
//     secure: true,
//   });

//   const mailData = {
//     from: 'mailer.carpetech@gmail.com',
//     to: req.body.email,
//     subject: `Message From ${req.body.name}`,
//     text: req.body.message + ' | Sent from: ' + req.body.email,
//     html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
//   };

//   transporter.sendMail(mailData, function (err, info) {
//     if (err) console.log(err);
//     else console.log(info);
//   });

//   console.log(req.body);
//   res.send('success');
// }

// const transporter = nodemailer.createTransport({
//   service: 'zoho',
//   host: 'smtpro.zoho.in',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'careeros@tryporpra.com',
//     pass: process.env.NEXT_PUBLIC_PASSWORD,
//   },
// });

// const mailOption = {
//   from: 'careeros@tryporpra.com',
//   to: 'augustinerepos@gmail.com',
//   subject: 'Send Email Tutorial',
//   html: `
//         <h3>Hello Augustine</h3>
//         <li> title: ${subject}</li>
//         <li> message: ${message}</li>
//         `,
// };
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
      secure: true,
    });

    const mailOption = {
      from: 'mailer.carpetech@gmail.com',
      to: req.body.email,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + ' | Sent from: ' + req.body.email,
      html: `
        <h3>Hello from your website</h3>
        <li> title: ${subject}</li>
        <li> message: ${message}</li> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: 'Email Sent Successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Send Email' }, { status: 500 });
  }
}
