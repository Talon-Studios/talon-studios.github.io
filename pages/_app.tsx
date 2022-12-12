import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url:string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-YVJ081HBEG"></Script>
      <Script id='google-analytics' strategy='afterInteractive' dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YVJ081HBEG', {
            page_path: window.location.pathname,
          });
        `,
      }}/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
