import React from 'react';

const VerificationPage = () => {
  const handleResendFormSubmit = () => {
    const form = document.getElementById("resend-code-form");
    form.submit();
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Authentication - Alle-AI | Your All-in-one AI Platform</title>
        {/* CSS files */}
        <link rel="stylesheet" href="dist/css/tabler.min.css" />
        <link rel="stylesheet" href="dist/css/tabler-flags.min.css" />
        <link rel="stylesheet" href="dist/css/tabler-payments.min.css" />
        <link rel="stylesheet" href="dist/css/tabler-vendors.min.css" />
        <link rel="stylesheet" href="dist/css/demo.min.css" />
      </head>
      <body className="border-top-wide border-primary d-flex flex-column">
        <div className="page page-center">
          <div className="container-tight py-4">
            <div className="text-center mb-4">
              <a href="." className="navbar-brand navbar-brand-autodark">
                <img src="static/logo.svg" height="36" alt="" />
              </a>
            </div>

            <form className="card card-md" action="" method="post">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Code Verification</h2>
                <div className="text-success">
                  <center style={{ fontSize: '20px' }}>Thanks for signing up!</center>
                </div>
                <p className="text-muted mb-4">
                  <center>We've sent a verification code to your email - <span style={{ color: '#206bc4' }}>someone@alle-ai.com</span></center>
                </p>
                <div className="mb-3">
                  <input name="ver-code" type="text" className="form-control" placeholder="Enter code" />
                </div>
                <div className="form-footer">
                  <button type="submit" name="submit-code" className="btn btn-primary w-100">
                    Continue
                  </button>
                </div>
              </div>
            </form>

            {/* Resend code */}
            <form id="resend-code-form" method="post" action="">
              <input type="hidden" name="resend-code" value="tbrue" />
            </form>
            <div className="text-center text-muted mt-3">
              Didn't receive the code?{' '}
              <a href="#" onClick={handleResendFormSubmit} tabIndex="-1">
                <u>Resend</u>
              </a>
            </div>
            {/* End Resend code */}
          </div>
        </div>
        {/* Libs JS */}
        {/* Tabler Core */}
        <script src="./dist/js/tabler.min.js"></script>
        <script src="./dist/js/demo.min.js"></script>
      </body>
    </html>
  );
};

export default VerificationPage;
