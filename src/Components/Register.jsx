import React, { useState } from "react";
import "./Register.css";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const TogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="logindiv container-fluid d-flex flex-wrap">
      <div className="leftdiv px-5 col-lg-5 col-md-5 col-sm-12">
        <h1 className="pb-2">Tools you need to run your business.</h1>
        <h5 className="fw-normal pb-5">
          Accounting. Inventory. Leads and more.
        </h5>
        <img
          src="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/igfaz60zse4f0t0t6f2z/do-web-banner-and-lottie-json-animation-gifs.png"
          alt="Business tools"
          className="img-fluid"
        />
        <h6 className="fw-normal pt-5">
          Join thousands of freelancers and businesses to grow your business
        </h6>
      </div>
      <div className="rightdiv col-lg-7 col-md-7 col-sm-12 text-center">
        <div className="align-middle mt-5 formdiv px-4 px-md-5">
          <h3>Sign Up on Refrens</h3>
          <form className="my-auto">
            <button type="button" className="btn google">
              <FcGoogle /> Continue with Google
            </button>
            <div className="d-flex align-items-center my-4">
              <hr className="flex-grow-1" />
              <span className="px-2">OR</span>
              <hr className="flex-grow-1" />
            </div>
            <div className="mb-3 row">
              <label htmlFor="country" className="col-sm-4 col-form-label">
                Country <sup>*</sup>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  aria-describedby="countryHelp"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="yournameInput"
                className="col-sm-4 col-form-label"
              >
                Your Name <sup>*</sup>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="yournameInput"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="email" className="col-sm-4 col-form-label">
                Your Email <sup>*</sup>
              </label>
              <div className="col-sm-8">
                <input type="email" className="form-control" id="email" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="phoneNo" className="col-sm-4 col-form-label">
                Phone <sup>*</sup>
              </label>
              <div className="col-sm-8">
                <input type="tel" className="form-control" id="phoneNo" />
              </div>
            </div>
            <div className="mb-3 row position-relative">
              <label
                htmlFor="exampleInputPassword1"
                className="col-sm-4 col-form-label"
              >
                Set Password <sup>*</sup>
              </label>
              <div className="col-sm-8">
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
            <div className="mb-3 form-check d-flex align-items-start w-100">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label ms-2" htmlFor="exampleCheck1">
                I agree to the Refrens{" "}
                <span className="pageLink">Terms of Service</span> and{" "}
                <span className="pageLink">Privacy Policy</span>
              </label>
            </div>
            <button type="submit" className="btn submit">
              Create Account
            </button>
          </form>
          <p className="formLinkSentence mt-3">
            Already a user? <span id="pageLink">Login here</span>
          </p>
        </div>
      </div>
    </div>
  );
}
