import StyledComponentsRegistry from './lib/registry';
import { Roboto_Condensed } from 'next/font/google';
import { getServices } from '@/lib/api';

import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';

import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const robotoCondensed = Roboto_Condensed({
  subset: ['latin'],
  weight: ['400', '700'],
  preload: false,
});

export default async function RootLayout({ children }) {
  const services = await getServices(false);
  const menuItems = services.map(({ title, slug }) => ({
    title,
    slug,
  }));

  return (
    <html lang='en'>
      <head></head>
      <body style={{ margin: 0 }} className={robotoCondensed.className}>
        <StyledComponentsRegistry>
          <Header menu={menuItems} />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
