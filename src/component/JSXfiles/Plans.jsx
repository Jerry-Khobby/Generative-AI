import React,{useState} from 'react';

const Plans = () => {



    const Footer = () => (
        <footer className="footer footer-transparent d-print-none footerfix">
          <small>
            <div className="container-xl">
              <div className="row text-center align-items-center flex-row-reverse">
                <div className="col-lg-auto ms-lg-auto">
                  <ul className="list-inline list-inline-dots mb-0 mobilefix">
                    <li className="list-inline-item">v1.0.0-beta</li>
                    <li className="list-inline-item">
                      <a href="terms.html" target="_blank" className="link-secondary" rel="noopener">
                        Terms of Service
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="link-secondary" data-bs-toggle="modal" data-bs-target="#general-feedback-modal" rel="noopener">
                        Give Feedback
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                  <ul className="list-inline list-inline-dots mb-0">
                    <li className="list-inline-item">
                      Copyright &copy; <script>document.write(new Date().getFullYear());</script>
                      <a href="https://alle-ai.com" className="link-secondary">
                        Alle-AI
                      </a>
                      . All rights reserved.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </small>
        </footer>
      );


      const [feedbackText, setFeedbackText] = useState('');
      const [feedbackSuccess, setFeedbackSuccess] = useState(false);
      const [feedbackError, setFeedbackError] = useState(false);
      const [feedbackEmptyError, setFeedbackEmptyError] = useState(false);
      const [feedbackLoading, setFeedbackLoading] = useState(false);
    
      const handleFeedbackSubmit = () => {
        // Perform feedback submission logic here
        if (feedbackText.trim() === '') {
          setFeedbackEmptyError(true);
        } else {
          // Simulate loading state (you should replace this with your actual API call)
          setFeedbackLoading(true);
    
          // Simulate API call delay
          setTimeout(() => {
            // Simulate success or error based on your logic
            const isSuccess = Math.random() < 0.8; // 80% success rate
    
            if (isSuccess) {
              setFeedbackSuccess(true);
            } else {
              setFeedbackError(true);
            }
    
            setFeedbackLoading(false);
          }, 1000);
        }
      };
    
      const resetFeedbackState = () => {
        setFeedbackText('');
        setFeedbackSuccess(false);
        setFeedbackError(false);
        setFeedbackEmptyError(false);
        setFeedbackLoading(false);
      };
    
      
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          http-equiv="X-UA-Compatible"
          content="ie=edge"
        />
        <title>Plans - Alle-AI | Your All-in-one AI Platform</title>
        {/* CSS files */}
        <link href="dist/css/tabler.min.css" rel="stylesheet" />
        <link
          href="dist/css/tabler-flags.min.css"
          rel="stylesheet"
        />
        <link
          href="dist/css/tabler-payments.min.css"
          rel="stylesheet"
        />
        <link
          href="dist/css/tabler-vendors.min.css"
          rel="stylesheet"
        />
        <link
          href="dist/css/demo.min.css"
          rel="stylesheet"
        />

        {/* Markdown To HTML */}
        {/* <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script> */}

      </head>
      <style>
        {`
        .badge {
          cursor: pointer;
        }
      `}
      </style>
      <body>
        <div className="wrapper">
        <header className="navbar navbar-expand-md navbar-light d-print-none">
      <div className="container-xl">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <a href="../">
            <img
              src="./static/logo.svg"
              width="110"
              height="32"
              alt="Alle-AI"
              className="navbar-brand-image"
              title="Alle-AI | Your All-in-one AI Platform"
            />
          </a>
        </h1>
        <div className="navbar-nav flex-row order-md-last">
          <div className="nav-item dropdown d-none d-md-flex me-3">
            <a
              href="#"
              className="nav-link px-0"
              data-bs-toggle="dropdown"
              tabIndex="-1"
              aria-label="Show Announcements"
              title="Announcement"
            >
              <svg
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
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
              <span className="badge bg-red badge-blink"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-card">
              <div className="card">
                <div className="card-body">
                  Announcements: There are no announcements to report at the moment.
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
              <span className="avatar avatar-sm" style={{ background: '#ec407a', scale: 0.99 }}>
                <span style={{ color: 'white' }}>DA</span>
              </span>
              <div className="d-none d-xl-block ps-2">
                <div>Dickson Agyei</div>
                <div className="mt-1 small text-muted">Welcome</div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#general-feedback-modal">
                Give Feedback
              </a>
              <div className="dropdown-divider"></div>
              <a href="terms.html" target="_blank" className="dropdown-item">
                Terms of Service
              </a>
              <a href="login.html" className="dropdown-item text-warning">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>


    
<div className="page-wrapper">
    <div className="container-xl">
      <div className="page-header d-print-none">
        <div className="row align-items-center">
          <div className="col">
            <h2 className="page-title">Choose Your Plan</h2>
          </div>
          <div id="error-message" style={{ display: 'none' }}>
            <center style={{ color: '#cd5b22' }}>An error occurred. Please try again or try reloading this page.</center>
          </div>
        </div>
      </div>
    </div>
    <div className="page-body">
      <div className="container-xl">
        <div className="row">
          {/* Alle-AI Plans */}
    <div className="col-sm-6 col-lg-3">
      <div className="card card-md">
        <div className="ribbon ribbon-top ribbon-bookmark bg-green">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>
        </div>
        <div className="card-body text-center">
          <div className="text-uppercase text-muted font-weight-medium">Premium</div>
          <div id="pricePremium" className="display-5 my-3" style={{ fontSize: '280%' }}>
            <strong><span style={{ fontSize: '60%', fontWeight: 'bolder' }}>GHS</span> 240<small style={{ fontSize: '51%' }}>/month</small></strong>
            <br />
            <span style={{ fontSize: '15px' }}>≈ $20/month</span>
          </div>
          <ul className="list-unstyled lh-lg">
            <li><strong>Unlimited</strong> Usage</li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Text Models
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Image Models
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-danger" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Audio Models
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-danger" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Video Models
            </li>
          </ul>
          <span id="toggleButtonPremium" className="badge bg-blue-lt">Change to /year</span>
          <span id="yearlyDiscountPremium" style={{ display: 'none' }} className="text-green align-items-center"><strong><br />Save ≈17.36%</strong></span>
          <div id="getStartedPremium" className="text-center mt-4">
            <a href="chat.html" className="btn btn-green w-100" id="premium">Get Started</a>
          </div>
          <br />
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-lg-3">
      <div className="card card-md">
        <div className="card-body text-center">
          <div className="text-uppercase text-muted font-weight-medium">Free</div>
          <div id="priceFree" className="display-5 my-3" style={{ fontSize: '280%' }}>
            <strong><span style={{ fontSize: '60%', fontWeight: 'bolder' }}>GHS</span> 0<small style={{ fontSize: '51%' }}>/month</small></strong><br />
            <span style={{ fontSize: '15px' }}>≈ $0/month</span>
          </div>
          <ul className="list-unstyled lh-lg">
            <li><strong>Limited</strong> Usage</li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Text Models
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-danger" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Image Models
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-danger" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Audio Models
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-danger" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Video Models
            </li>
          </ul>
          <span id="toggleButtonFree" className="badge bg-blue-lt">Change to /year</span>
          <div className="text-center mt-4">
            <a className="btn w-100" id="free">Coming Soon</a>
          </div>
          <br />
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-lg-3">
      <div className="card card-md">
        <div className="card-body text-center">
          <div className="text-uppercase text-muted font-weight-medium">Custom</div>
          <div id="priceCustom" className="display-5 my-3" style={{ fontSize: '280%' }}>
            <strong>
              <span style={{ fontSize: '60%', fontWeight: 'bolder' }}>GHS</span> x<small style={{ fontSize: '51%' }}>/month</small>
            </strong>
            <br />
            <span style={{ fontSize: '15px' }}>≈ $x/month</span>
          </div>
          <ul className="list-unstyled lh-lg">
            <li><strong>Customize</strong> Usage</li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Text Models
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Image Models
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Audio Models
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Video Models
            </li>
          </ul>
          <span id="toggleButtonCustom" className="badge bg-blue-lt">Change to /year</span>
          <div className="text-center mt-4">
            <a className="btn w-100" id="custom">Coming Soon</a>
          </div>
          <br />
          {/*<a href="#" data-bs-toggle="modal" data-bs-target="#modal-custom">Details</a>*/}
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-lg-3">
      <div className="card card-md">
        <div className="card-body text-center">
          <div className="text-uppercase text-muted font-weight-medium">Unlimited</div>
          <div id="priceUnlimited" className="display-5 my-3" style={{ fontSize: '280%' }}>
            <strong>
              <span style={{ fontSize: '60%', fontWeight: 'bolder' }}>GHS</span> x<small style={{ fontSize: '51%' }}>/month</small>
            </strong>
            <br />
            <span style={{ fontSize: '15px' }}>≈ $x/month</span>
          </div>
          <ul className="list-unstyled lh-lg">
            <li><strong>Unlimited</strong> Usage</li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Text Models
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Image Models
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Audio Models
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
              Video Models
            </li>
          </ul>
          <span id="toggleButtonUnlimited" className="badge bg-blue-lt">Change to /year</span>
          <div className="text-center mt-4">
            <a className="btn w-100" id="unlimited">Coming Soon</a>
          </div>
          <br />
          {/*<a href="#" data-bs-toggle="modal" data-bs-target="#modal-unlimited">Details</a>*/}
        </div>
      </div>
    </div>
          {/* Alle-AI Plans End */}
        </div>
      </div>
    </div>
    {/* footerfix class added to footer element 24/5/23 */}
    <Footer />
  </div>




</div>
{/** the modal fade with id and everything  */}
<div className="modal modal-blur fade" id="general-feedback-modal" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Feedback</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Whether you've been using our service for a while or you're just getting started, your input is incredibly valuable. We want to hear about your experiences, suggestions, and any issues you've encountered.
            <br /><br />

            <center style={{ display: feedbackSuccess ? 'block' : 'none' }}>
              <div className="text-success">Thank you for your feedback!</div><br />
            </center>
            <center style={{ display: feedbackError ? 'block' : 'none' }}>
              <div className="text-danger">An error occurred. Please try again.</div><br />
            </center>
            <center style={{ display: feedbackEmptyError ? 'block' : 'none' }}>
              <div className="text-danger">Please type in your feedback before submitting.</div><br />
            </center>

            <textarea
              id="feedbackText"
              className="form-control"
              rows="3"
              placeholder="Type your feedback here..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            ></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn me-auto" data-bs-dismiss="modal" onClick={resetFeedbackState}>
              Close
            </button>
            <div style={{ display: feedbackLoading ? 'block' : 'none' }} className="spinner-border spinner-border-sm text-muted" role="status"></div>
            <button
              id="sendFeedbackButton"
              type="button"
              className="btn btn-primary"
              onClick={handleFeedbackSubmit}
              disabled={feedbackLoading}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
      </body>
    </html>
  );
};





export default Plans;
