'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyCemcFUJTtSY4pL6RaAL48N8uU3PT0pof8';
const PLACE_ID = 'ChIJAfUrG0VEBEcRtEycalTUIso';

export const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Perform an asynchronous operation (e.g., fetch data from an API)
        const response = await fetch('api/googleReviews');
        // const jsonData = await response.json();
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Google Maps Reviews</h1>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>Rating: {review.rating}</p>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
