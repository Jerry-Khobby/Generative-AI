import React from 'react';
import '../Css/TermPage.css'; // Import your custom CSS file if needed

const TermPage = () => {
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
          Terms of service - Alle-AI | Your All-in-one AI Platform
        </title>
        {/* CSS files */}
        <link href="/dist/css/tabler.min.css" rel="stylesheet" />
        <link href="/dist/css/tabler-flags.min.css" rel="stylesheet" />
        <link href="/dist/css/tabler-payments.min.css" rel="stylesheet" />
        <link href="/dist/css/tabler-vendors.min.css" rel="stylesheet" />
        <link href="/dist/css/demo.min.css" rel="stylesheet" />
      </head>
      <body className="border-top-wide border-primary d-flex flex-column">
        <div className="page page-center">
          <div className="container-narrow py-4">
            <div className="text-center mb-4">
              <a href="." className="navbar-brand navbar-brand-autodark">
                <img src="./static/logo.svg" height="36" alt="" />
              </a>
            </div>
            <div className="card card-md">
              <div className="card-body">
                <h1
                  className="card-title"
                  style={{
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                  }}
                >
                  Terms of Service
                </h1>
                <div className="markdown">
                  <p>
                    Welcome to Alle-AI. These Terms of Service ("Terms")
                    govern your use of the Alle-AI website and services, so
                    please read them carefully. By accessing or using Alle-AI,
                    you agree to be bound by these Terms. If you do not agree
                    with any part of these Terms, you may not use the platform.
                  </p>
                  <span>
                    <b>Last Updated: July 29, 2023</b>
                  </span>
                  <hr />

                  {/* ... Rest of the content ... */}
                  <div>
      <h3 id="">1. Acceptance of Terms</h3>
      <p>
        By using Alle-AI, you acknowledge that you have read, understood, and
        agree to comply with these Terms, as well as our{' '}
        <a href="privacy-policy">Privacy Policy</a>. These Terms constitute a
        legally binding agreement between you and Alle-AI, so it is essential to
        review them regularly, as they may be updated from time to time.
        Continued use of the platform after any modifications to the Terms
        indicates your acceptance of such changes.
      </p>

      <h3 id="">2. User Eligibility</h3>
      <p>
        Alle-AI is available to individuals who are at least 13 years old or
        the age of majority in their jurisdiction. If you are accessing Alle-AI
        on behalf of an organization, you represent and warrant that you have
        the authority to bind the organization to these Terms.
      </p>

      <h3 id="">3. User Accounts</h3>
      <p>
        To access certain features of Alle-AI, you may need to create an
        account. You are responsible for maintaining the confidentiality of
        your account credentials and are solely liable for all activities that
        occur under your account. If you suspect any unauthorized access to
        your account, you must notify us immediately.
      </p>

      <h3 id="">4. Proper Use of Alle-AI</h3>
      <ul>
        <li>
          <p>
            Your Usage: You may use Alle-AI solely for lawful and legitimate
            purposes. You agree not to use the platform in a manner that
            violates any applicable laws, infringes on the rights of others, or
            is harmful, offensive, or disruptive.
          </p>
        </li>
        <li>
          <p>
            Content Guidelines: When using Alle-AI, you must not upload,
            publish, or share any content that is unlawful, abusive,
            discriminatory, defamatory, or otherwise objectionable. You retain
            ownership of the content you submit, but you grant Alle-AI a
            non-exclusive, royalty-free, worldwide license to use, reproduce,
            modify, adapt, publish, translate, and distribute it for the purpose
            of providing the services.
          </p>
        </li>
        <li>
          <p>
            Intellectual Property: Alle-AI and its associated models are
            protected by copyright, trademark, and other intellectual property
            laws. You may not use, copy, modify, distribute, or reproduce any
            part of Alle-AI or its content without prior written permission
            from Alle-AI.
          </p>
        </li>
      </ul>

      <h3 id="">5. Third-Party Models and Services</h3>
      <p>
        Alle-AI integrates various third-party AI models, including ChatGPT,
        Bard, Claude, Dalle-E, Stable Difusion, Midjourney, and others. While
        we strive to provide the best user experience, we do not guarantee the
        availability, accuracy, or performance of these models. The providers of
        these AI models also operate these models on their respective
        platforms. The AI models we provide on Alle-AI run on similar engines
        as the models on their respective platforms but may not be identical to
        the versions hosted on their respective platforms. We have tailored
        their implementations to suit the Alle-AI environment while maintaining
        their high-quality performance.
      </p>

      <h3 id="">6. Limitation of Liability</h3>
      <p>
        Alle-AI provides the platform on an "as-is" and "as-available" basis.
        We do not make any warranties, express or implied, regarding the
        platform's reliability, accuracy, availability, fitness for a
        particular purpose, or non-infringement. We shall not be liable for
        any direct, indirect, incidental, special, consequential, or exemplary
        damages arising out of or in connection with your use of Alle-AI.
      </p>

      <h3 id="">7. Indemnification</h3>
      <p>
        You agree to indemnify and hold Alle-AI, its officers, directors,
        employees, and affiliates harmless from any claims, losses, damages,
        liabilities, costs, and expenses (including attorneys' fees) arising
        out of or in connection with your use of Alle-AI, violation of these
        Terms, or infringement of any rights of another person or entity.
      </p>

      <h3 id="">8. Termination</h3>
      <p>
        Alle-AI reserves the right to suspend or terminate your access to the
        platform at any time for any reason, including if you violate these
        Terms. Upon termination, all provisions that would reasonably be
        expected to survive termination shall remain in effect.
      </p>
    </div>

                  <h3 id="">9. Contact Information</h3>
                  <p>
                    If you have any questions or concerns regarding these Terms
                    or Alle-AI, you may contact us at{' '}
                    <a href="mailto:contact@alle-ai.com">contact@alle-ai.com</a>
                    .
                  </p>

                  <hr />
                  <p>
                    By using Alle-AI, you signify your agreement to these Terms.
                    Thank you for using Alle-AI, and we hope you enjoy your
                    creative journey with the Generative AI models on our
                    platform!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Libs JS */}
        {/* Tabler Core */}
        <script src="/dist/js/tabler.min.js"></script>
        <script src="/dist/js/demo.min.js"></script>
      </body>
    </html>
  );
};

export default TermPage;
