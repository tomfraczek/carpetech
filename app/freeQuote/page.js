'use client';
import Head from 'next/head';
import { useState } from 'react';

export default function FreeQuote() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      message,
    };

    const response = await fetch('api/sendFreeQuote', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const dataa = response.json();
    // console.log('Sending');

    // let data = {
    //   name,
    //   email,
    //   message,
    // };

    // fetch('api/contact', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {
    //   console.log('Response received');
    //   if (res.status === 200) {
    //     console.log('Response succeeded!');
    //     setSubmitted(true);
    //     setName('');
    //     setEmail('');
    //     setMessage('');
    //   }
    // });
  };

  return (
    <main>
      <div>
        <form>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              onChange={(e) => {
                setName(e.target.value);
              }}
              name='name'
            />
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name='email'
            />
          </div>

          <div>
            <label htmlFor='message'>Message</label>
            <input
              type='text'
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name='message'
            />
          </div>

          <input
            type='submit'
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
        </form>
      </div>
    </main>
  );
}
