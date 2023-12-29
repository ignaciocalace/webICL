import React from "react";
import SocialButton from "../SocialButton/SocialButton.jsx";
import "./Contact.style.css";
const Contact = () => {
  return (
    <div id="contact" className="container-contact">
      <h3 data-aos="fade-in" data-aos-duration="600">
        Contact
      </h3>
      <div className="container-social">
        <div
          className="social-context"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h4>More about my career?</h4>
          <SocialButton
            href="https://www.linkedin.com/in/ignacio-calace/"
            id={"linkedin"}
            svgPath={
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={
                    "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  }
                ></path>
              </svg>
            }
            username="in/ignacio-calace"
          />
        </div>
        <div
          className="social-context"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h4>All my repositories?</h4>
          <SocialButton
            href="https://github.com/ignaciocalace"
            id="github"
            svgPath={
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={
                    "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  }
                ></path>
              </svg>
            }
            username="ignaciocalace"
          />
        </div>
        <div
          className="social-context"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <h4>Do you want to contact me?</h4>
          <SocialButton
            href={"mailto:ignacio.calace@gmail.com"}
            id="gmail"
            svgPath={
              <svg
                width="256px"
                height="256px"
                viewBox="0 -31.5 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M58.1818182,192.049515 L58.1818182,93.1404244 L27.5066233,65.0770089 L0,49.5040608 L0,174.59497 C0,184.253152 7.82545455,192.049515 17.4545455,192.049515 L58.1818182,192.049515 Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M197.818182,192.049515 L238.545455,192.049515 C248.203636,192.049515 256,184.224061 256,174.59497 L256,49.5040608 L224.844415,67.3422767 L197.818182,93.1404244 L197.818182,192.049515 Z"
                    fill="#34A853"
                  />
                  <polygon
                    fill="#EA4335"
                    points="58.1818182 93.1404244 54.0077618 54.4932827 58.1818182 17.5040608 128 69.8676972 197.818182 17.5040608 202.487488 52.4960089 197.818182 93.1404244 128 145.504061"
                  />
                  <path
                    d="M197.818182,17.5040608 L197.818182,93.1404244 L256,49.5040608 L256,26.2313335 C256,4.64587897 231.36,-7.65957557 214.109091,5.28587897 L197.818182,17.5040608 Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M0,49.5040608 L26.7588051,69.5731646 L58.1818182,93.1404244 L58.1818182,17.5040608 L41.8909091,5.28587897 C24.6109091,-7.65957557 0,4.64587897 0,26.2313335 L0,49.5040608 Z"
                    fill="#C5221F"
                  />
                </g>
              </svg>
            }
            username="ignacio.calace@gmail.com"
          />
        </div>
        <div
          className="social-context"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <h4>See my resume (again?)</h4>
          <SocialButton
            href=" https://drive.google.com/file/d/1cp9U5223oCaGsub8zDlILNVKNVB_s4Hu/view?usp=sharing"
            id={"pdf"}
            svgPath={
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 20"
              >
                <path
                  stroke="#FF4B26"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M1 18a.969.969 0 0 0 .933 1h12.134A.97.97 0 0 0 15 18M1 7V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v5M6 1v4a1 1 0 0 1-1 1H1m0 9v-5h1.5a1.5 1.5 0 1 1 0 3H1m12 2v-5h2m-2 3h2m-8-3v5h1.375A1.626 1.626 0 0 0 10 13.375v-1.75A1.626 1.626 0 0 0 8.375 10H7Z"
                />
              </svg>
            }
            username="PDF - Calace"
          >
            Abrir PDF
          </SocialButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
