'use client';
import { useState } from 'react';

export default function FreeQuote() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
