'use client';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Home() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send the form data to the server
      const response = await axios.post('/api/send-email', data);
      console.log('Email sent:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input type='text' name='name' />
          {/* {errors.name && <p>Name is required</p>} */}
        </div>

        <div>
          <label>Email</label>
          <input type='email' name='email' />
          {/* {errors.email && <p>Email is required</p>} */}
        </div>

        <div>
          <label>Message</label>
          <textarea name='message' rows='4' />
          {/* {errors.message && <p>Message is required</p>} */}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
