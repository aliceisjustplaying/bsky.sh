import Script from 'next/script';

export default function GA() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4J8EMRDXRH" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4J8EMRDXRH');
      `}
      </Script>
    </>
  );
}
