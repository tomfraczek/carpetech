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
      from: process.env.NODEMAILER_EMAIL,
      to: 'tomaszfr90@gmail.com',
      subject: 'Send Email Tutorial',
      html: `
        <h3>Hello Augustine</h3>
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
// const transporter = nodemailer.createTransport({
//   port: 465,
//   host: 'smtp.gmail.com',
//   auth: {
//     user: process.env.NODEMAILER_EMAIL,
//     pass: process.env.NODEMAILER_PW,
//   },
//   secure: true,
// });
