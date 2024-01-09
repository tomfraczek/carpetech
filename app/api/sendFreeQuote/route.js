import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, file, interests, message, name, phone, postcode } = await request.json();

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
      to: 'info@carpetech.co.uk',
      subject: 'EMAIL SENT FROM YOUR WEBSITE',
      html: `
        <h3>Hello Michael</h3>
    <p>You have received a new contact form submission with the following details:</p>
    <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
        <li>Postcode: ${postcode}</li>
        <li>Interests: ${interests}</li>
        <li>Message: ${message}</li>
    </ul>
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: 'Email Sent Successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Send Email' }, { status: 500 });
  }
}
