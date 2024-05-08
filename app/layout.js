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
  const services = await getServices(false);
  const topBar = await getTopBar(false);
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
        function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({&#39;gtm.start&#39;:
new Date().getTime(),event:&#39;gtm.js&#39;});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!=&#39;dataLayer&#39;?&#39;&amp;l=&#39;+l:&#39;&#39;;j.async=true;j.src=
&#39;https://www.googletagmanager.com/gtm.js?id=&#39;+i+dl;f.parentNode.insertBefore(j,f)
;
})(window,document,&#39;script&#39;,&#39;dataLayer&#39;,&#39;GTM-NSNGFDRL&#39;);
        `}
      </Script>
      <body style={{ margin: 0 }} className={robotoCondensed.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-
NSNGFDRL"
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
