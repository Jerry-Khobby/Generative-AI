import React, { useState,useEffect} from 'react';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);



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


  
    const handleCredentialResponse = (response) => {
      const sendRequest = async () => {
        const responsePayload = response.credential;
        try {
          const res = await fetch("../app/apis/google-signin.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ jwt_token: responsePayload }),
          });
  
          const data = await res.json();
  
          if (data === 'to-chat') {
            // Take user to chat
            window.location = "../../chat";
          } else if (data === 'invalid-token') {
            // Display error message to the user
            document.getElementById("google-signin-notif").innerHTML = '<div class="text-warning"><center>Invalid ID token! <br><br></center></div>';
          } else {
            // Display error message to the user
            document.getElementById("google-signin-notif").innerHTML = '<div class="text-warning"><center>Something went wrong. Please try again. <br><br></center></div>';
          }
        } catch (error) {
          // Handle error
          console.error("Error:", error);
        }
      };
  
      // Run AJAX function
      sendRequest();
    };

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
          setShowPassword(!showPassword);
        } else if (field === 'cpassword') {
          setShowCPassword(!showCPassword);
        }
      };

  return (
    <html lang="en">
      <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
      <meta property="og:image" content="https://www.alle-ai.com/static/logo.svg"/>
      <meta name="description" content="Meet the All-In-One AI Platform! Combine the outputs of powerful Generative AIs including OpenAI's ChatGPT, Google's Bard AI, Anthropic's Claude and many more!"/>
      <meta name="keywords" content="ai, all ai, all, alle ai, alle-ai, chatgpt, bard"/>
    <meta name="author" content="Dickson Agyei Jnr."/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Register - Alle-AI | Your All-in-one AI Platform</title>
    <link href="dist/css/tabler.min.css" rel="stylesheet"/>
    <link href="dist/css/tabler-flags.min.css" rel="stylesheet"/>
    <link href="dist/css/tabler-payments.min.css" rel="stylesheet"/>
    <link href="dist/css/tabler-vendors.min.css" rel="stylesheet"/>
    <link href="dist/css/demo.min.css" rel="stylesheet"/>
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://apis.google.com/js/platform.js?onload=onGoogleApiLoad" async defer></script>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="https://accounts.google.com/gsi/client" async defer/>        
        <script src="dist/js/tabler.min.js"></script>
    <script src="dist/js/demo.min.js"></script>
      </head>
      <body className="border-top-wide border-primary d-flex flex-column">
        <div className="page page-center">
          <div className="container-tight py-4">
            {/* Rest of the content */}
            <div class="text-center mb-4">
            <a href="#" className="navbar-brand navbar-brand-autodark">
  <img src="static/logo.svg" height="36" alt="" />
</a>
        </div>
        <div id="g_id_onload"
                 data-client_id="806290868734-imov7losjuvdjromijsg4ms7pjprrtqj.apps.googleusercontent.com"
                 data-context="signup"
                 data-ux_mode="popup"
                 data-callback="handleCredentialResponse"
                 data-auto_select="true"
                 data-itp_support="true">
            </div>
            {/* ... */}

            <form className="card card-body card-md" action="" method="post">
              {/* Form content */}
              <input type="hidden" name="reg_method" value="email"/>
              {/* ... */}
              <div class="card-body">
            <h2 class="card-title text-center mb-4">Create new account</h2>
            <div class="text-warning"><center>This is an error message</center></div>
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input
                  type="text"
                  value=""
                  name="firstname"
                  className="form-control"
                  placeholder="First name"
                />
            </div>
            <div class="mb-3">
            <input
                  type="text"
                  value=""
                  name="lastname"
                  className="form-control"
                  placeholder="Last name"
                />
            </div>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                  type="email"
                  value=""
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                />
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <div class="input-group input-group-flat">
                <input 
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="form-control"
                placeholder="Enter password"
                autoComplete="off"
                
                />
                <span className="input-group-text">
              <a
                href="#"
                className="link-secondary"
                onClick={() => togglePasswordVisibility('password')}
              >
                {showPassword ? (
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
                    {/* ... (eye icon) */}
                  </svg>
                ) : (
                  <svg
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
                    {/* ... (eye-off icon) */}
                  </svg>
                )}
              </a>
            </span>
              
              </div>
            </div>
            <div class="mb-3">
              <div class="input-group input-group-flat">
                <input
                     id="password"
                     type={showPassword ? 'text' : 'password'}
                     name="password"
                     className="form-control"
                     placeholder="Confirm Password"
                     autoComplete="off"
                />

              </div>
            </div>
            <div class="form-footer">
              <button type="submit" name="create" class="btn btn-primary w-100"
              onClick={handleCredentialResponse}
              >Create your account</button>
            </div>
            </div>
              {/* ... */}
            </form>
            <div class="hr-text">OR</div>
            {/* ... */}
        <form class="card card-body card-md" action="" method="post">
          <input type="hidden" name="google-auth" value="true"/>
          <div class="card-body center-elements-inside">
            <div id="google-signin-notif"></div>  
            <div class="g_id_signin"
                 data-type="standard"
                 data-shape="rectangular"
                 data-theme="outline"
                 data-text="continue_with"
                 data-size="large"
                 data-logo_alignment="center">
            </div>
          </div>
        </form>
        <div class="text-center text-muted mt-3">
          Already have an account? <a href="login.html" tabindex="-1"><u>Login</u></a>
        </div>
        </div>
        </div>





      </body>
    </html>
  );
};

export default RegisterPage;
