import StyledComponentsRegistry from "./lib/registry";
import { Roboto_Condensed } from "next/font/google";
import { getServices, getTopBar, getMap, getNavigation } from "@/lib/api";

import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

import "./globals.css";
import Script from "next/script";

const robotoCondensed = Roboto_Condensed({
  subset: ["latin"],
  weight: ["400", "700"],
  preload: false,
});

export default async function RootLayout({ children }) {
  const GTM_ID = "GTM-PBP7Q6DZ";
  const services = await getServices(false);
  const topBar = await getTopBar(false);
  // const map = await getMap();
  const navigation = await getNavigation(false);
  const menuItems = services.map(
    ({ title, slug, serviceChildrenCollection }) => ({
      title,
      slug,
      serviceChildrenCollection,
    })
  );
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PBP7Q6DZ');
        `}
      </Script>
      <body style={{ margin: 0 }} className={robotoCondensed.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBP7Q6DZ"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <StyledComponentsRegistry>
          <Header menu={menuItems} header={topBar} navigation={navigation} />
          {children}
          <Footer navigation={navigation} />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
