import StyledComponentsRegistry from './lib/registry';
import { Roboto_Condensed } from 'next/font/google';
import { getServices, getTopBar } from '@/lib/api';

import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';

import './globals.css';

const robotoCondensed = Roboto_Condensed({
  subset: ['latin'],
  weight: ['400', '700'],
  preload: false,
});

export default async function RootLayout({ children }) {
  const services = await getServices(false);
  const topBar = await getTopBar(false);
  const menuItems = services.map(({ title, slug, serviceChildrenCollection }) => ({
    title,
    slug,
    serviceChildrenCollection,
  }));

  // Specify the URL of the API you want to fetch data from
  const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.GOOGLE_MAPS_PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  // Use the fetch function to make a GET request
  fetch(apiUrl)
    .then((response) => {
      // Check if the request was successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Handle the data from the API
      console.log('Data from API:', data);
    })
    .catch((error) => {
      // Handle errors during the fetch operation
      console.error('Fetch error:', error);
    });

  return (
    <html lang='en'>
      <body style={{ margin: 0 }} className={robotoCondensed.className}>
        <StyledComponentsRegistry>
          <Header menu={menuItems} header={topBar} />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
