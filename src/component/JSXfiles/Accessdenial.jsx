import React from 'react';

const AccessDeniedPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Access Denied - Alle-AI | Your All-in-one AI Platform</title>
        <script defer data-api="/stats/api/event" data-domain="preview.tabler.io" src="/stats/js/script.js"></script>
        <meta name="msapplication-TileColor" content="" />
        <meta name="theme-color" content="" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Tabler comes with tons of well-designed components and features. Start your adventure with Tabler and make your dashboard great again. For free!"
        />
        {/* Add your Twitter and Open Graph meta tags here */}
        <link href="dist/css/tabler.min.css?1674944800" rel="stylesheet" />
        <link href="dist/css/tabler-flags.min.css?1674944800" rel="stylesheet" />
        <link href="dist/css/tabler-payments.min.css?1674944800" rel="stylesheet" />
        <link href="dist/css/tabler-vendors.min.css?1674944800" rel="stylesheet" />
        <link href="dist/css/demo.min.css?1674944800" rel="stylesheet" />
        <style>
          {`@import url('https://rsms.me/inter/inter.css');
            :root {
              --tblr-font-sans-serif: 'Inter Var', -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
            }
            body {
              font-feature-settings: "cv03", "cv04", "cv11";
            }`}
        </style>
      </head>
      <body className="d-flex flex-column">
        <script src="./dist/js/demo-theme.min.js?1674944800"></script>
        <div className="page page-center">
          <div className="container container-tight py-4">
            <div className="text-center mb-4">
              <a href="." className="navbar-brand navbar-brand-autodark">
                <img src="static/logo.svg" height="36" alt="" />
              </a>
            </div>
            <div className="text-center">
              <div className="my-5">
                <h2 className="h1">Access Denied!</h2>
                <p className="fs-h3 text-muted">
                  We've blocked your browser. Email <strong>support@alle-ai.com</strong>.<br />
                  Please click the link to confirm your address.
                </p>
              </div>
              <div className="text-center text-muted mt-3">
                Can't see the email? Please check the spam folder.<br />
                Wrong email? Please <a href="#">re-enter your address</a>.
              </div>
            </div>
          </div>
        </div>
        {/* Libs JS */}
        {/* Tabler Core */}
        <script src="./dist/js/tabler.min.js?1674944800" defer></script>
        <script src="./dist/js/demo.min.js?1674944800" defer></script>
      </body>
    </html>
  );
};

export default AccessDeniedPage;
