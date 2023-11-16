import React, { useState,useEffect } from 'react';
import $ from 'jquery'


const ImageGenerationApp = () => {
      const loadChats = (chatId) => {
        // Your logic for loading chats goes here
        console.log(`Loading chats for ID ${chatId}`);
      };



      const [feedback, setFeedback] = useState('');
      const [feedbackSuccess, setFeedbackSuccess] = useState(false);
      const [feedbackError, setFeedbackError] = useState(false);
      const [feedbackEmptyError, setFeedbackEmptyError] = useState(false);
      const [feedbackLoading, setFeedbackLoading] = useState(false);
    
      const resetFeedbackState = () => {
        setFeedbackSuccess(false);
        setFeedbackError(false);
        setFeedbackEmptyError(false);
        setFeedbackLoading(false);
      };
    
      const handleSendFeedback = () => {
        resetFeedbackState();
    
        if (!feedback.trim()) {
          setFeedbackEmptyError(true);
          return;
        }
    
        setFeedbackLoading(true);
    
        // Add your logic for sending feedback here.
        // You can use APIs or other methods to handle feedback submission.
    
        // Simulate a delay for demonstration purposes (remove in production).
        setTimeout(() => {
          // Simulate a successful response (setFeedbackSuccess) or an error (setFeedbackError).
          setFeedbackSuccess(true);
          setFeedbackLoading(false);
        }, 1500);
      };


      useEffect(() => {
        getImageGenHistory();
      }, []);
    
      // TimeAgo function
      const timeAgo = (datetime, full = false) => {
        const now = new Date();
        const ago = new Date(datetime);
        let diff = Math.floor((now - ago) / 1000);
    
        const interval = {
          y: 31536000,
          m: 2592000,
          w: 604800,
          d: 86400,
          h: 3600,
          i: 60,
          s: 1
        };
    
        const string = {
          y: 'year',
          m: 'month',
          w: 'week',
          d: 'day',
          h: 'hour',
          i: 'minute',
          s: 'second'
        };
    
        const result = [];
        for (const key in interval) {
          if (diff >= interval[key]) {
            const count = Math.floor(diff / interval[key]);
            if (count > 1) {
              result.push(count + ' ' + string[key] + 's');
            } else {
              result.push(count + ' ' + string[key]);
            }
            diff %= interval[key];
          }
        }
    
        if (!full) {
          result = result.slice(0, 1);
        }
    
        return result.length ? result.join(', ') + ' ago' : 'just now';
      };
    
      // Getting Image Generation List
      const getImageGenHistory = () => {
        const userID = "";
        $('#img-history-list-div-main').hide();
        $('#waiting-img-Gen-list-div').show();
        $('#error-message').hide();
    
        $.ajax({
          url: "../app/apis/photo/get-photo-history.php",
          type: 'POST',
          data: {
            userID: userID
          },
          success: function(response) {
            $('#waiting-img-Gen-list-div').hide();
            $('#img-history-list-div-main').show();
            $('#img-list-div').show();
    
            $("#img-list-div").empty();
            response.forEach(function(element) {
              $('#img-list-div').append('<div><div class="row"><div class="col"><div onclick="loadImgs(' + element['id'] + ')" class="text-truncate"><a style="color:#1e293b;" href="#"><strong>' + element['prompt'] + '</strong></a></div><div class="text-muted">' + timeAgo(element['time_generated']) + '</div></div></div></div>');
            });
          },
          error: function(xhr, status, error) {
            console.error("Ajax Request error:", error);
    
            $('#img-history-list-div-main').hide();
            $('#waiting-img-Gen-list-div').show();
            $('#error-message').show();
          }
        });
      };
    
      useEffect(() => {
        document.getElementById("prompt_input").focus();
      }, []);
    
      $('#loading-input-prompt').hide();
      $('#active-input-prompt').show();
      $('#loading-image').hide();
      $('#error-message').hide();
      $('#sponsored-div').show();
    
      const generateImages = (event) => {
        event.preventDefault();
        $("#show-images-div").children().hide();
    
        const prompt = $('#prompt_input').val();
        $('#loading-input-prompt').show();
        $('#active-input-prompt').hide();
        $('#loading-image').show();
        $('#sponsored-div').hide();
    
        $.ajax({
          url: "../app/apis/photo/alle-ai.php",
          type: 'POST',
          data: {
            user_prompt: prompt
          },
          success: function(response) {
            if (response[0] === 'logout') {
              window.location.href = 'logout';
            }
    
            $('#loading-input-prompt').hide();
            $('#active-input-prompt').show();
            $('#loading-image').hide();
            $('#prompt_input').val(prompt);
    
            // For DALL-E
            const dalle_images = response['dalle'];
            if (dalle_images.length > 0) {
              dalle_images.forEach(path => {
                $('#show-images-div').append('<div id="" class="genimg col-sm-6 col-lg-4"><div class="card card-sm"><img src="' + path + '" class="card-img-top"><div class="card-body"><div class="d-flex align-items-center"><div><div>DALL-E 2</div></div><div class="ms-auto"><a href="' + path + '" download><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path><path d="M7 11l5 5l5 -5"></path><path d="M12 4l0 12"></path></svg></a></div></div></div></div></div>');
              });
            }
    
            $('#sponsored-div').show();
    
            // For Stable Diffusion
            const stable_diffusion_images = response['stable_diffusion'];
            if (stable_diffusion_images.length > 0) {
              stable_diffusion_images.forEach(path => {
                $('#show-images-div').append('<div id="" class="genimg col-sm-6 col-lg-4"><div class="card card-sm"><img src="' + path + '" class="card-img-top"><div class="card-body"><div class="d-flex align-items-center"><div><div>STABLE DIFFUSION</div></div><div class="ms-auto"><a href="' + path + '" download><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path><path d="M7 11l5 5l5 -5"></path><path d="M12 4l0 12"></path></svg></a></div></div></div></div></div>');
              });
            }
          },
          error: function(xhr, status, error) {
            $('#loading-input-prompt').hide();
            $('#active-input-prompt').show();
            $('#error-message').show();
            $('#loading-image').hide();
            $('#sponsored-div').show();
    
            console.log("Image Generation error:", error);
          }
        });
      };
    
      const loadImgs = (imgsID,event) => {
        event.preventDefault();
        $("#show-images-div").children().hide();
        $('#loading-input-prompt').show();
        $('#active-input-prompt').hide();
        $('#loading-image').show();
        $('#sponsored-div').hide();
        document.querySelector('#close-imageGenHistory-list').click();
    
        $.ajax({
          url: "../app/apis/photo/get-imgs.php",
          type: 'POST',
          data: {
            imgsID: imgsID
          },
          success: function(response) {
            if (response[0] === 'logout') {
              window.location.href = 'logout';
            }
    
            $('#loading-input-prompt').hide();
            $('#active-input-prompt').show();
            $('#sponsored-div').show();
            $('#loading-image').hide();
            document.getElementById("prompt_input").value = response[0]['prompt'];
    
            // For DALL-E
            const dalle_imgs = JSON.parse(response[0]['dalle2']);
            if (dalle_imgs.length > 0) {
              dalle_imgs.forEach(path => {
                $('#show-images-div').append('<div id="" class="genimg col-sm-6 col-lg-4"><div class="card card-sm"><img src="' + path + '" class="card-img-top"><div class="card-body"><div class="d-flex align-items-center"><div><div>DALL-E 2</div></div><div class="ms-auto"><a href="' + path + '" download><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path><path d="M7 11l5 5l5 -5"></path><path d="M12 4l0 12"></path></svg></a></div></div></div></div></div>');
              });
            }
    
            const stable_diffusion_imgs = JSON.parse(response[0]['stable_diffusion']);
            if (stable_diffusion_imgs.length > 0) {
              stable_diffusion_imgs.forEach(path => {
                $('#show-images-div').append('<div id="" class="genimg col-sm-6 col-lg-4"><div class="card card-sm"><img src="' + path + '" class="card-img-top"><div class="card-body"><div class="d-flex align-items-center"><div><div>STABLE DIFFUSION</div></div><div class="ms-auto"><a href="' + path + '" download><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path><path d="M7 11l5 5l5 -5"></path><path d="M12 4l0 12"></path></svg></a></div></div></div></div></div>');
              });
            }
    
          },
          error: function(xhr, status, error) {
            $('#loading-input-prompt').hide();
            $('#active-input-prompt').show();
            $('#sponsored-div').show();
            $('#loading-image').hide();
    
            $(document).ready(function() {
              $('#error-message').show();
              setTimeout(function() {
                $('#error-message').hide();
              }, 5000);
            });
    
            console.log('Error:', error);
          }
        });
    
        getImageGenHistory(/* replace with your user ID logic */);
      };
    
      const generateRandomPrompt = () => {
        const inputBox = document.getElementById("prompt_input");
        const prompts = ["prompt1", "prompt2", "prompt3"]; // Add your prompts here
        const randomIndex = Math.floor(Math.random() * prompts.length);
        inputBox.value = prompts[randomIndex];
      };
    
      useEffect(() => {
        const generatePromptButton = document.getElementById("generatePrompt");
        generatePromptButton.addEventListener("click", generateRandomPrompt);
        const generatePromptButton2 = document.getElementById("generatePrompt2");
        generatePromptButton2.addEventListener("click", generateRandomPrompt);
      }, []);
    
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          httpEquiv="X-UA-Compatible"
          content="ie=edge"
        />
        <title>Image Generation - Alle-AI | Your All-in-one AI Platform</title>
        {/* CSS files */}
        <link rel="stylesheet" href="dist/css/tabler.min.css" />
        <link rel="stylesheet" href="dist/css/tabler-flags.min.css" />
        <link rel="stylesheet" href="dist/css/tabler-payments.min.css" />
        <link rel="stylesheet" href="dist/css/tabler-vendors.min.css" />
        <link rel="stylesheet" href="dist/css/demo.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/showdown@2.1.0/dist/showdown.min.js"></script>
      </head>
      <body>
<div className="wrapper">
<header className="navbar navbar-expand-md navbar-light d-print-none">
      <div className="container-xl">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <a href="../">
            <img
              src="static/logo.svg"
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
            <a
              href="#"
              className="nav-link d-flex lh-1 text-reset p-0"
              data-bs-toggle="dropdown"
              aria-label="Open user menu"
            >
              <span className="avatar avatar-sm" style={{ background: '#ec407a', scale: 0.99 }}>
                <span style={{ color: 'white' }}>DA</span>
              </span>
              <div className="d-none d-xl-block ps-2">
                <div>Dickson Agyei</div>
                <div className="mt-1 small text-muted">Premium</div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#modal-report">
                History
              </a>
              {/*<a href="#" className="dropdown-item">Profile & account</a>*/}
              <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#general-feedback-modal">
                Give Feedback
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                Settings
              </a>
              <a href="terms.html" target="_blank" className="dropdown-item">
                Terms of Service
              </a>
              <a href="login.html" className="dropdown-item text-warning">
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
            <ul className="navbar-nav" style={{ margin: 'auto' }}>
              <li
                className="nav-item"
                title="Combine ChatGPT, Google's Bard and Anthropic's Claude text generation AI models."
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                <a className="nav-link" href="chat.html">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-message-circle"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
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
              <li className="nav-item active">
                <a className="nav-link" href="image.html" style={{ pointerEvents: 'none' }}>
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-photo"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
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

<div className="container-xl">
      {/* Page title */}
      <div className="page-header d-print-none">
        <div className="row align-items-center">
          <div className="col">
            <h2 className="page-title">
              Image Generation
            </h2>
            <div className="text-muted mt-1">Combine DALL-E, Stable Diffusion, etc.</div>
          </div>

          {/* Page title actions */}
          <div className="col-auto ms-auto d-print-none">
            <div className="btn-list">
              {/* <div className="col-auto align-self-center">
                <span
                  className="form-help"
                  data-bs-toggle="popover"
                  data-bs-placement="top"
                  data-bs-content="<p>Alle-AI info box. It may come op useful onde day - Dickson Agyei</p><p class='mb-0'><a href='#'>USP ZIP codes lookup tools</a></p>"
                  data-bs-html="true"
                >
                  ?
                </span>
              </div> */}

              <span className="d-none d-sm-inline">
                <a href="#" className="btn btn-white" data-bs-toggle="modal" data-bs-target="#modal-report">
                  History
                </a>
              </span>
              <a id="generatePrompt" href="#" className="btn btn-green d-none d-sm-inline-block btn-icon">
                {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                Surprise me
              </a>
              <a id="generatePrompt2" href="#" style={{ height: '24px', width: '50px' }} className="btn btn-green d-sm-none btn-icon">
                {/* Download SVG icon from http://tabler-icons.io/i/plus */}
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
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="page-body">
      <div className="container-xl">
        {/* Prompt Input */}
        <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
          <form action="" method="post" name="chat-form" id="chat-form">
            {/* inputfix class added to the div below */}
            <div className="input-icon inputfix" style={{ height: '50px!important' }} id="active-input-prompt">
              <input
                id="prompt_input"
                name="prompt_input"
                type="text"
                className="form-control"
                style={{ height: '50px!important', margin: 'auto!important' }}
                placeholder="Type your prompt here…"
                autoComplete="off"
              />

              <a href="" onClick={() => generateImages()} className="input-icon-addon" aria-label="Button" style={{ pointerEvents: 'visible!important' }}>
                {/* Download SVG icon from http://tabler-icons.io/i/send */}
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
                  <line x1="10" y1="14" x2="21" y2="3" />
                  <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
              </a>
            </div>

            <div className="input-icon inputfix" style={{ height: '50px!important', margin: 'auto!important' }} id="loading-input-prompt">
              <div className="input-icon mb-3">
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  style={{ height: '50px!important' }}
                  placeholder="Loading…"
                />
                <span className="input-icon-addon">
                  <div className="spinner-border spinner-border-sm text-muted" role="status"></div>
                </span>
              </div>
            </div>
          </form>
        </div>
        {/* End Prompt Input */}

        <div className="row row-cards" id="show-images-div">
          {/* Images will be displayed here */}
          <div id="error-message">
            <center style={{ color: '#cd5b22' }}>Error Generating Images. Please try again</center>
          </div>

          <div className="col-sm-6 col-lg-4" id="sponsored-div">
            <div className="card card-sm">
              <a target="_blank" href="https://alle-ai.com" className="d-block">
                <img src="static/sponsored.png" className="card-img-top" />
              </a>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <div>
                      <a target="_blank" href="https://alle-ai.com">Sponsored</a>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a target="_blank" href="https://alle-ai.com" className="text-muted">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-external-link"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
                        <path d="M10 14l10 -10"></path>
                        <path d="M15 4l5 0l0 5"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4" id="loading-image">
            <div className="card card-sm">
              <div className="skeleton-image"></div>
              <div className="card-body">
                <div className="skeleton-heading"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <footer className="footer footer-transparent d-print-none footerfix">
      <small>
        <div className="container-xl">
          <div className="row text-center align-items-center flex-row-reverse">
            <div className="col-lg-auto ms-lg-auto">
              {/* remove on mobile -mobilefix */}
              <ul className="list-inline list-inline-dots mb-0 mobilefix">
                <li className="list-inline-item">v1.0.0-beta</li>
                <li className="list-inline-item">
                  <a href="terms.html" target="_blank" className="link-secondary" rel="noopener">
                    Terms of Service
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="privacy-policy" target="_blank" className="link-secondary" rel="noopener">
                    Privacy Policy
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
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn me-auto" data-bs-dismiss="modal">
              Close
            </button>
            <div style={{ display: feedbackLoading ? 'block' : 'none' }} className="spinner-border spinner-border-sm text-muted" role="status"></div>
            <button id="sendFeedbackButton" type="button" className="btn btn-primary" onClick={handleSendFeedback}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="modal modal-blur fade" id="modal-success" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div className="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div className="modal-status bg-success"></div>
          <div className="modal-body text-center py-4">
            <h3>Proceed to chat section?</h3>
            {/* <div class="text-muted">You can write something here - Dickson</div> */}
          </div>
          <div className="modal-footer">
            <div className="w-100">
              <div className="row">
                <div className="col">
                  <a href="#" className="btn w-100" data-bs-dismiss="modal">
                    No
                  </a>
                </div>
                <div className="col">
                  <a href="chat" className="btn btn-success w-100">
                    Yes
                  </a>
                </div>
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
            <h5 className="modal-title">My Image Generation History</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <div id="waiting-img-Gen-list-div">Hang in tight. Your Image Generation history is loading...</div>

            <div id="img-history-list-div-main" className="card" style={{ height: 'calc(24rem + 10px)' }}>
              <div className="card-body card-body-scrollable card-body-scrollable-shadow">
                <div id="chat-list-div" className="divide-y">
                  {/* Example Chat List Items */}
                  {/* Replace the following lines with your dynamic data */}
                  <div>
                    <div className="row">
                      <div className="col">
                        <div onClick={() => loadChats(1170)} className="text-truncate">
                          <a style={{ color: '#1e293b' }} href="#">
                            <strong>Accra's Richest: Ernesto Taricone</strong>
                          </a>
                        </div>
                        <div className="text-muted">1 week ago</div>
                      </div>
                    </div>
                  </div>
                  {/* End of Example Chat List Items */}
                </div>
                <br />
                <br />
                <div>
                  <center>-- End of Chat List --</center>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <a id="close-imageGenHistory-list" href="#" className="btn btn-link link-secondary" data-bs-dismiss="modal">
              Cancel
            </a>
            <a href="#" onClick={() => window.location.reload(true)} className="btn btn-primary ms-auto" data-bs-dismiss="modal">
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






</div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="dist/js/tabler.min.js"></script>
    <script src="dist/js/demo.min.js"></script>
      </body>
    </html>
  );
};

export default ImageGenerationApp;
