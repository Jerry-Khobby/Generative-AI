import React, { useState,useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import showdown from 'showdown';

// ... (the rest of your imports and code)




const ChatPage=()=>{

    const sendMessage = () => {
        // Your sendMessage function logic here
      };


      const [feedbackText, setFeedbackText] = useState('');
      const [feedbackSuccess, setFeedbackSuccess] = useState(false);
      const [feedbackError, setFeedbackError] = useState(false);
      const [feedbackEmptyError, setFeedbackEmptyError] = useState(false);
      const [feedbackLoading, setFeedbackLoading] = useState(false);
    
      const handleSendFeedback = () => {
        if (!feedbackText.trim()) {
          setFeedbackEmptyError(true);
          return;
        }
    
        // Simulate sending feedback (you can replace this with your actual API call)
        setFeedbackLoading(true);
        setTimeout(() => {
          // Assuming the feedback is successfully sent
          setFeedbackSuccess(true);
          setFeedbackLoading(false);
        }, 2000);
      };
    
      const handleCloseModal = () => {
        // Reset feedback-related states when the modal is closed
        setFeedbackText('');
        setFeedbackSuccess(false);
        setFeedbackError(false);
        setFeedbackEmptyError(false);
      };

      useEffect(() => {
        if (window.ApexCharts) {
          new ApexCharts(document.getElementById('chart-revenue-bg'), {
            chart: {
              type: 'area',
              fontFamily: 'inherit',
              height: 40.0,
              sparkline: {
                enabled: true,
              },
              animations: {
                enabled: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            fill: {
              opacity: 0.16,
              type: 'solid',
            },
            stroke: {
              width: 2,
              lineCap: 'round',
              curve: 'smooth',
            },
            series: [
              {
                name: 'Profits',
                data: [
                  37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 39, 62, 51, 35, 41, 67,
                ],
              },
            ],
            grid: {
              strokeDashArray: 4,
            },
            xaxis: {
              labels: {
                padding: 0,
              },
              tooltip: {
                enabled: false,
              },
              axisBorder: {
                show: false,
              },
              type: 'datetime',
            },
            yaxis: {
              labels: {
                padding: 4,
              },
            },
            labels: [
              '2020-06-20', '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19',
            ],
            colors: ['#206bc4'],
            legend: {
              show: false,
            },
          }).render();
        }
      }, []);





      useEffect(() => {
        const markdownToHTML = new showdown.Converter();
    
        // Activating the input box
        document.getElementById("prompt_input").focus();
    
        // Hiding everything by default
        // ... (other hiding logic)
    
        // Your existing logic for conversation code, chat list, and other setup
    
        // Your existing timeAgo function
    
        // Getting Conversation List
        const getConversationList = (userID) => {
          // ... (your existing logic)
        };
        getConversationList(/* pass user ID */);
    
        // Load Chats Function
        const loadChats = (conversationID) => {
          // ... (your existing logic)
        };
    
        // Send Message Function
        const sendMessage = () => {
          // ... (your existing logic)
        };
    
        // Retry Function
        const retry = () => {
          // ... (your existing logic)
        };
    
        // Prevent form from submitting by default
        const handleFormSubmit = (event) => {
          event.preventDefault();
          const promptInput = document.forms["chat-form"]["prompt_input"].value;
          if (promptInput !== "") {
            sendMessage();
          }
        };
    
        // General Feedback Stuff
        const handleFeedback = () => {
          // ... (your existing logic)
        };
    
        return () => {
          // Cleanup logic if needed
        };
      }, []); 
      
    
    return(
        <html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Chat - Alle-AI | Your All-in-one AI Platform</title>
   {/*  <!-- CSS files --> */}
    <link href="dist/css/tabler.min.css" rel="stylesheet"/>
    <link href="dist/css/tabler-flags.min.css" rel="stylesheet"/>
    <link href="dist/css/tabler-payments.min.css" rel="stylesheet"/>
    <link href="dist/css/tabler-vendors.min.css" rel="stylesheet"/>
    <link href="dist/css/demo.min.css" rel="stylesheet"/>
    <script src="https://cdn.jsdelivr.net/npm/showdown@2.1.0/dist/showdown.min.js"></script>


  </head>
  <body>

<div className="wrapper">

{/** this is the header   */}
<header className="navbar navbar-expand-md navbar-light d-print-none">
      <div className="container-xl">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <a href="../">
            <img src="static/logo.svg" width="110" height="32" alt="Alle-AI" className="navbar-brand-image" title="Alle-AI | Your All-in-one AI Plaform" />
          </a>
        </h1>
        <div className="navbar-nav flex-row order-md-last">
          {/* Announcements Dropdown */}
          <div className="nav-item dropdown d-none d-md-flex me-3">
            <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex="-1" aria-label="Show Announcements" title="Announcement">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
          {/* User Dropdown */}
          <div className="nav-item dropdown">
            <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
              <span className="avatar avatar-sm" style={{ background: '#ec407a', scale: 0.99 }}>
                <span style={{ color: 'white' }}>DA</span>
              </span>
              <div className="d-none d-xl-block ps-2">
                <div>Dickson Agyei</div>
                <div className="mt-1 small text-muted">Premium</div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#modal-report">History</a>
              {/* <a href="#" className="dropdown-item">Profile & account</a> */}
              <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#general-feedback-modal">Give Feedback</a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">Settings</a>
              <a href="terms.html" target="_blank" className="dropdown-item">Terms of Service</a>
              <a href="login.html" className="dropdown-item text-warning">Logout</a>
            </div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
            <ul className="navbar-nav" style={{ margin: 'auto' }}>
              {/* Chat */}
              <li className="nav-item active">
                <a className="nav-link" href="chat.html" style={{ pointerEvents: 'none' }}>
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path>
                      <path d="M12 12l0 .01"></path>
                      <path d="M8 12l0 .01"></path>
                      <path d="M16 12l0 .01"></path>
                    </svg>
                  </span>
                  <span className="nav-link-title">Chat</span>
                </a>
              </li>
              {/* Image */}
              <li className="nav-item" title="Combine DALL-E, Stable Diffusion and other powerful image generation AI models." data-bs-toggle="tooltip" data-bs-placement="bottom">
                <a className="nav-link" href="image.html">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M15 8l.01 0"></path>
                      <path d="M4 4m0 3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3z"></path>
                      <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5"></path>
                      <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2"></path>
                    </svg>
                  </span>
                  <span className="nav-link-title">Image</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>



<div className="page-wrapper">

    <div className="container-xl smallads">
      {/* Page title */}
      <div className="page-header d-print-none">
        <div className="row align-items-center">
          <div className="col">
            {/* Page pre-title */}
            <div className="page-pretitle advertise">
              <a>Sponsored</a>
            </div>

            <a className="coca-cola" target="_blank" href="https://alle-ai.com">
              Alle-AI: All-in-one AI platform
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="10" height="10" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
                <path d="M10 14l10 -10"></path>
                <path d="M15 4l5 0l0 5"></path>
              </svg>
            </a>
          </div>
          <div className="col-auto ms-auto d-print-none">
            <div className="btn-list">
              <span className="d-none d-sm-inline">
                <a href="#" className="btn btn-white" data-bs-toggle="modal" data-bs-target="#modal-report">
                  History
                </a>
              </span>
              <a href="#" onClick={() => window.location.reload(true)} className="btn btn-green d-none d-sm-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                New Chat
              </a>
              <a href="#" onClick={() => window.location.reload(true)} style={{ height: '24px', width: '50px' }} className="btn btn-green d-sm-none btn-icon" aria-label="Create new chat">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="page-header d-print-none">
        <div className="card cardmobilefix">
          <div className="card-header cardheadermobilefix">
            <h3 className="card-title" id="chat-title">New Chat</h3>
          </div>
          <div className="card chatbodymobilefix">
            {/* Chat windows */}
            <div className="card-body-scrollable card-body-scrollable-shadow align-items-center" id="welcome-chat-window">
              <div className="card-body text-center py-4 p-sm-5">
                <img src="./static/illustrations/undraw_sign_in_e6hj.svg" height="128" className="mb-n2" alt="" />
                <h1 className="mt-5">Welcome to Alle-AI!</h1>
                <p className="text-muted">Experience the power of OpenAI's ChatGPT, Google's Bard and Anthropic's Claude etc. all in one place! <br /> Simultaneously interact, compare and harness their combined potential.</p>
              </div>
            </div>
            <div className="card-body-scrollable card-body-scrollable-shadow align-items-center" id="loading-chat-window">
              <div className="card-body text-center py-4 p-sm-5">
                <img src="./static/illustrations/undraw_sign_in_e6hj.svg" height="128" className="mb-n2" alt="" />
                <h1 className="mt-5">Loading messages. Please wait...</h1>
              </div>
            </div>
            <div className="card-body-scrollable card-body-scrollable-shadow" id="chat-window">
              {/* Chat content appear here */}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', textAlign: 'center' }}>

{/* Prompt Input */}
<div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
  <form action="" method="post" name="chat-form" id="chat-form">
    <div className="input-icon inputfix" style={{ height: '50px!important' }} id="active-input-prompt">
      <input id="prompt_input" name="prompt_input" type="text" className="form-control" style={{ height: '50px!important', margin: 'auto!important' }} placeholder="Type your prompt here…" autoComplete="off" />
      <a href="" onClick={() => sendMessage()} className="input-icon-addon" aria-label="Button" style={{ pointerEvents: 'visible!important' }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="10" y1="14" x2="21" y2="3" />
          <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
        </svg>
      </a>
    </div>

  </form>

  <div className="input-icon inputfix" style={{ height: '50px!important', margin: 'auto!important' }} id="loading-input-prompt">

    <div className="input-icon mb-3">
      <input type="text" className="form-control" readOnly style={{ height: '50px!important' }} placeholder="Loading…" />
      <span className="input-icon-addon">
        <div className="spinner-border spinner-border-sm text-muted" role="status"></div>
      </span>
    </div>

  </div>

</div>

{/* End Prompt Input */}

{/* Footer */}
<footer className="footer footer-transparent d-print-none footerfix">
  <small>
    <div className="container-xl">
      <div className="row text-center align-items-center flex-row-reverse">
        <div className="col-lg-auto ms-lg-auto">
          <ul className="list-inline list-inline-dots mb-0 mobilefix">
            <li className="list-inline-item">v1.0.0-beta</li>
            <li className="list-inline-item"><a href="terms.html" target="_blank" className="link-secondary" rel="noopener">Terms of Service</a></li>
            <li className="list-inline-item"><a href="privacy-policy" target="_blank" className="link-secondary" rel="noopener">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="col-12 col-lg-auto mt-3 mt-lg-0">
          <ul className="list-inline list-inline-dots mb-0">
            <li className="list-inline-item">
              Copyright &copy; <script>document.write(new Date().getFullYear());</script>
              <a href="https://alle-ai.com" className="link-secondary">Alle-AI</a>.
              All rights reserved.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </small>
</footer>

</div>

    <div className="modal modal-blur fade" id="general-feedback-modal" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Feedback</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
          </div>
          <div className="modal-body">
            Whether you've been using our service for a while or you're just getting started, your input is incredibly valuable. We want to hear about your experiences, suggestions, and any issues you've encountered.
            <br /><br />

            {feedbackSuccess && <center><div className="text-success">Thank you for your feedback!</div><br /></center>}
            {feedbackError && <center><div className="text-danger">An error occurred. Please try again.</div><br /></center>}
            {feedbackEmptyError && <center><div className="text-danger">Please type in your feedback before submitting.</div><br /></center>}

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
            <button type="button" className="btn me-auto" data-bs-dismiss="modal" onClick={handleCloseModal}>Close</button>
            <div id="feedbackLoading" style={{ display: feedbackLoading ? 'block' : 'none' }} className="spinner-border spinner-border-sm text-muted" role="status"></div>
            <button id="sendFeedbackButton" type="button" className="btn btn-primary" onClick={handleSendFeedback}>Send</button>
          </div>
        </div>
      </div>
    </div>



    <div className="modal modal-blur fade" id="modal-simple" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Feedback</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            This tab will allow users to submit their feedback. Still working on it. Already designed and structured the database for user feedback. <br /> - Dickson
          </div>
          <div className="modal-body">
            <div className="col-lg-12">
              <div>
                <label className="form-label">Additional information</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>


</div>
</div>





<div className="modal modal-blur fade" id="modal-report" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">My Chat History</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">

              {/* Uncomment the following section if needed */}
              {/* <div id="waiting-chat-list-div">Hang in tight. Your chat history is loading... <div id="chat-list-reload">Reload</div> </div> */}

              <div id="chat-list-div-main" className="card" style={{ height: 'calc(24rem + 10px)' }}>
                <div className="card-body card-body-scrollable card-body-scrollable-shadow">

                  {/* Chat list items go here */}
                  <div id="chat-list-div" className="divide-y">
                    {/* Sample chat item */}
                    <div>
                      <div className="row">
                        <div className="col">
                          <div onClick={() => this.loadChats(1170)} className="text-truncate">
                            <a style={{ color: '#1e293b' }} href="#"><strong>Accra's Richest: Ernesto Taricone</strong></a>
                          </div>
                          <div className="text-muted">1 week ago</div>
                        </div>
                      </div>
                    </div>
                    {/* More chat items go here */}
                  </div>

                  <br />
                  <br />
                  <div><center>-- End of Chat List --</center></div>

                </div>
              </div>

            </div>

            <div className="modal-footer">
              <a id="close-chat-list" href="#" className="btn btn-link link-secondary" data-bs-dismiss="modal">
                Cancel
              </a>
              <a href="#" onClick={() => window.location.reload(true)} className="btn btn-primary ms-auto" data-bs-dismiss="modal">
                {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                New Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          /* mobile fix dan */
          .footerfix {
            padding: 0;
            color: #626976;
          }
          .coca-cola {
            font-size: 10px;
          }
          .advertise {
            font-size: 8px;
          }
          .cardmobilefix {
            margin-top: auto;
          }
          .cardheadermobilefix {
            height: auto;
            font-size: auto;
          }
          .card-title {
            font-size: auto;
            margin: auto!important;
          }
          .chatbodymobilefix {
            height: calc(100vh - 340px);
          }
          .inputfix {
            width: 700px;
            margin: auto;
          }

          @media (max-width: 600px) {
            .inputfix {
              width: 90%;
            }
            .card-title {
              margin-top: -10px ;
              font-size: 11px;
            }
            .chatbodymobilefix {
              height: calc(100vh - 260px);
            }
            .cardmobilefix {
              margin-top: -22px;
            }
            .cardheadermobilefix {
              height: 10px!important;
            }
            .footerfix {
              padding-top: 0;
              margin-top: -10px;
              padding-bottom: 5px;
              font-size: 10px;
            }
            .smallads {
              margin-top: -22px;
              font-size: 11px;
            }
            .coca-cola {
              font-size: 8px;
            }
            .advertise {
              font-size: 5px;
              margin-bottom: -10px;
            }
          }

          @media (min-width: 1024px) {
            .footerfix {
              padding: 2rem 0;
            }
          }

          .mobilefix {
            display: none;
          }

          @media (min-width: 1024px) {
            .mobilefix {
              display: block;
            }
          }
        `}
      </style>







      <script src="./dist/libs/apexcharts/dist/apexcharts.min.js"></script>
<script src="./dist/js/tabler.min.js"></script>
<script src="./dist/js/demo.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> 
  </body>
  </html>
    )
}

export default ChatPage;