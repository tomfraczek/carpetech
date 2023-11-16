import StyledComponentsRegistry from './lib/registry';
import { Roboto_Condensed } from 'next/font/google';
import { getAllPages } from '@/lib/api';

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
  const allPages = await getAllPages(false);
  const menuItems = allPages.map(({ title, slug }) => ({
    title,
    slug,
  }));

  console.log(menuItems);

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
