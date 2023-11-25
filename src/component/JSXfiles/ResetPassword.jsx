import React, { useState} from 'react';

const ResetPassword = () => {


  


  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleCPasswordVisibility = () => {
    setShowCPassword(!showCPassword);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>
          Reset Password - Alle-AI | Your All-in-one AI Platform
        </title>
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
            <form
              className="card card-md"
              action=""
              method="post"
              autoComplete="off"
            >
              <div className="card-body text-center">
                <div className="mb-4">
                  <h2 className="card-title">Password Reset</h2>
                </div>
                <div className="text-warning">
                  <center>This is an error message</center>
                </div>

                <div className="mb-4">
                  <span className="avatar avatar-xl mb-3" style={{ background: '#ec407a', scale: 0.99 }}>
                    <span style={{ color: 'white' }}>DA</span>
                  </span>

                  <h3>Dickson Agyei</h3>
                </div>
                <p className="text-muted">Please enter your new password</p>
                <div className="mb-4">
                  <div className="input-group input-group-flat">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="form-control"
                      placeholder="Enter New Password"
                    />
                    <span className="input-group-text">
                      <a href="#" className="link-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
                        {showPassword ? (
                          <svg
                            id="eye-off"
                            onClick={togglePasswordVisibility}
                            title="Hide password"
                            data-bs-toggle="tooltip"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-eye-off"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path>
                            <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path>
                            <path d="M3 3l18 18"></path>
                          </svg>
                        ) : (
                          <svg
                            id="eye"
                            onClick={togglePasswordVisibility}
                            title="Show password"
                            data-bs-toggle="tooltip"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            />
                            <circle cx="12" cy="12" r="2" />
                            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                          </svg>
                        )}
                      </a>
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-group input-group-flat">
                    <input
                      id="cpassword"
                      type={showCPassword ? 'text' : 'password'}
                      name="cpassword"
                      className="form-control"
                      placeholder="Confirm New Password"
                    />
                    <span className="input-group-text">
                      <a href="#" className="link-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
                        {showCPassword ? (
                          <svg
                            id="c-eye-off"
                            onClick={toggleCPasswordVisibility}
                            title="Hide password"
                            data-bs-toggle="tooltip"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-eye-off"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path>
                            <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path>
                            <path d="M3 3l18 18"></path>
                          </svg>
                        ) : (
                          <svg
                            id="c-eye"
                            onClick={toggleCPasswordVisibility}
                            title="Show password"
                            data-bs-toggle="tooltip"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            />
                            <circle cx="12" cy="12" r="2" />
                            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                          </svg>
                        )}
                      </a>
                    </span>
                  </div>
                </div>
                <div className="form-footer">
                  <button
                    type="submit"
                    name="reset-password"
                    className="btn btn-primary w-100"
                  >
                    Reset your password
                  </button>
                </div>
              </div>
            </form>
            <div className="text-center text-muted mt-3">
              Go back to <a href="./login"><u>Sign in</u></a>
            </div>
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

export default ResetPassword;
