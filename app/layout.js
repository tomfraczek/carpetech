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
