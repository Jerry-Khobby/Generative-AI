import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [passwordType, setPasswordType] = useState('password');
  // defining a state that hold the value of the data that have been stored  in the textfield 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // setting the error message state 
  const [errorMessage, setErrorMessage] = useState('');

  // when a change is been made in the textfield
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    // Load Google Sign-In client script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  const showHidePassword = () => {
    setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  const handleCredentialResponse =async (e) => {
    e.preventDefault();
    if(!formData.email||!formData.password){
      setErrorMessage('Fill in the all the fields below');
      return;
    }

    try{
      const response = await axios.post('http://localhost:5000/login', {
        email: formData.email,
        password: formData.password,
      });
      console.log('Registration successful:', response.data);
      setErrorMessage('Your account has been successfully  logged in ');

      setTimeout(() => {
        window.location.href = '/';
      }, 3000); // Adjust the time (in milliseconds) as needed

    }catch(error){
// Handle errors, e.g., display an error message to the user
console.error('Registration error:', error.message);
if (error.response && error.response.data && error.response.data.error) {
  // Set error message based on backend response
  setErrorMessage(error.response.data.error);
}else{
        // Set a generic error message if there are no specific messages from the backend
    setErrorMessage('Registration failed. Please try again.');
}
    }

  };


  return (
    <html lang="en">
          <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <meta property="og:image" content="https://www.alle-ai.com/static/logo.svg"/>
    <meta name="description" content="Meet the All-In-One AI Platform! Combine the outputs of powerful Generative AIs including OpenAI's ChatGPT, Google's Bard AI, Anthropic's Claude and many more!"/>
    <meta name="keywords" content="ai, all ai, all, alle ai, alle-ai, chatgpt, bard"/>
    <meta name="author" content="Dickson Agyei Jnr."/>
    <title>Login - Alle-AI | Your All-in-one AI Platform</title>
   {/*  <!-- CSS files --> */}
    <link href="dist/css/tabler.min.css" rel="stylesheet"/>
    <link href="dist/css/tabler-flags.min.css" rel="stylesheet"/>
    <link href="dist/css/tabler-payments.min.css" rel="stylesheet"/>
    <link href="dist/css/tabler-vendors.min.css" rel="stylesheet"/>
    <link href="dist/css/demo.min.css" rel="stylesheet"/>
    
  {/*   <!--JQuery--> */}
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </head>



    <div className="d-flex flex-column border-top-wide border-primary">
      <div className="page page-center">
        <div className="container-tight py-4">
          <div className="text-center mb-4">
            <Link to="." className="navbar-brand navbar-brand-autodark"><img src="static/logo.svg" height="36" alt="" /></Link>
          </div>

          <div id="g_id_onload"
               data-client_id="806290868734-imov7losjuvdjromijsg4ms7pjprrtqj.apps.googleusercontent.com"
               data-context="signin"
               data-ux_mode="popup"
               data-callback="handleCredentialResponse"
               data-auto_select="true"
               data-itp_support="true">
          </div>

          <form className="card card-md" action="" method="post">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login to your account</h2>
              {errorMessage && (
                <div className="text-warning">
                  <center>{errorMessage}</center>
                </div>
              )}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" value={formData.email} name="email" className="form-control" placeholder="Enter email"  onChange={handleInputChange}/>
              </div>
              <div className="mb-2">
                <label className="form-label">
                  Password
                  <span className="form-label-description">
                    <Link to="/resetpassword">Forgot password?</Link>
                  </span>
                </label>
                <div className="input-group input-group-flat">
                  <input id="password" type={passwordType} name="password" className="form-control" placeholder="Enter Password" autoComplete="off"  value={formData.password} onChange={handleInputChange} 
                  required
                  
                  />
                  <span className="input-group-text">
                    <Link href="#" className="link-secondary" onClick={showHidePassword}>
                      {passwordType === 'password' ? (
                        <svg id="eye" title="Show password" xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>
                      ) : (
                        <svg id="eye-off" title="Hide password" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path><path d="M3 3l18 18"></path></svg>
                      )}
                    </Link>
                  </span>
                </div>
              </div>
              <div className="form-footer">
                <button type="submit" name="login" className="btn btn-primary w-100"  onClick={handleCredentialResponse}>Login</button>
              </div>
            </div>
          </form>

          <div className="hr-text">OR</div>

          <form className="card card-body card-md" action="" method="post">
            <input type="hidden" name="google-oauth" value="true" />

            <div className="card-body center-elements-inside">
              {/* Div to display Google signin error */}
              <div id="google-signin-notif"></div>
              {/* Google Signin/Signup customized button */}
              <div className="g_id_signin"
                   data-type="standard"
                   data-shape="rectangular"
                   data-theme="outline"
                   data-text="continue_with"
                   data-size="large"
                   data-logo_alignment="center">
              </div>
            </div>
          </form>

          <div className="text-center text-muted mt-3">
            Don't have an account yet? <Link to="/register" tabIndex="-1"><u>Register</u></Link>
          </div>
        </div>
      </div>

      {/* Google Signin/Signup stuff */}
      <script src="./dist/js/tabler.min.js"></script>
    <script src="./dist/js/demo.min.js"></script>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
    </div>
    </html>
  );
};

export default Login;
