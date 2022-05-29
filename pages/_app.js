import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from 'next/script'
import "../styles/globals.css";
import Head from "next/head";
import OneSignal from 'react-onesignal';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    OneSignal.init({
      appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
    });
  }, []);

  return (
    <>
      <Head>
        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffed0e" />
        <meta name="theme-color" content="#ffed0e" />
      </Head>
      <Header />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YKTP7MSXS8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-YKTP7MSXS8');
      `}

      </Script>
    
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
