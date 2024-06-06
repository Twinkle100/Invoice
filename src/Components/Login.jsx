import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const TogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="logindiv container-fluid d-flex flex-wrap">
      <header class="p-3  text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="https://img.freepik.com/free-vector/leaf-maple-icon-logo-design_474888-2154.jpg?size=338&ext=jpg"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                class="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" class="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
            </ul>

            <div class="text-end">
              {/* <button type="button" class="btn btn-outline-light me-2">
                Login
              </button> */}
              <button type="button" class="btn registerbtn ">
                <FaUser />
                Register
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="rightdiv col-lg-12 col-md-12 col-sm-12 ">
        <div className="align-middle mt-5 formdiv px-4 px-md-5">
          <h3>Login to your Refrens account</h3>
          <form className="my-auto">
            <button type="button" className="btn google">
              <FcGoogle /> Continue with Google
            </button>
            <div className="d-flex  my-4">
              <hr className="flex-grow-1" />
              <span className="px-2">OR</span>
              <hr className="flex-grow-1" />
            </div>
            <div className="mb-1 column">
              <label htmlFor="email" className="col-sm-4 col-form-label">
                Your Email <sup>*</sup>
              </label>
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" />
              </div>
            </div>
            <div className="mb-1 column position-relative">
              <label
                htmlFor="exampleInputPassword1"
                className="col-sm-12 col-form-label"
              >
                Password <sup>*</sup>
              </label>
              <div className="col-sm-12">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <div className="password-icon" onClick={TogglePassword}>
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <a id="forgot">Forgot password?</a>
            <button type="submit" className="btn submit">
              Create Account
            </button>
          </form>
          <p className="formLinkSentence mt-3">
            Having issues logging in? <a class="pageLink">Click here</a>
          </p>
          <p className="formLinkSentence mt-3">
            Don't have an account? <a class="pageLink">Signup now</a>
          </p>
        </div>
      </div>
    </div>
  );
}
