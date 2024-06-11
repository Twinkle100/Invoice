import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import "./Register.css";

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [country, setCountry] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("India"); // Default selection to India
  const [countryCode, setCountryCode] = useState("in"); // Default country code for India
  const [showOptions, setShowOptions] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2"
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setCountry(data);
        setFilteredCountries(data); // Initialize filteredCountries with all countries
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const TogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleCountrySelect = (name, code) => {
    setSelectedCountry(name);
    setCountryCode(code.toLowerCase());
    setShowOptions(false);
  };

  const handlePhoneNumberChange = (input) => {
    setPhoneNumber(input);
    console.log(input);
    setValid(validatePhoneNumber(input));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div className="registerdiv container-fluid d-flex flex-wrap">
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
        <header className="p-3 text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <a
                href="https://img.freepik.com/free-vector/leaf-maple-icon-logo-design_474888-2154.jpg?size=338&ext=jpg"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <svg
                  className="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use xlinkHref="#bootstrap"></use>
                </svg>
              </a>
              <div className="text-end">
                <Link to="/login" type="button" className="btn loginbtn">
                  <FaUser /> Login
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="align-middle mt-5 formdiv px-4 px-md-5 mx-auto">
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
            <div className="mb-3 row position-relative">
              <label htmlFor="country" className="col-sm-4 col-form-label">
                Country <sup>*</sup>
              </label>
              <div className="col-sm-8 position-relative">
                <div
                  className="input-group"
                  onClick={() => setShowOptions(!showOptions)}
                >
                  <select
                    className="form-control"
                    id="country"
                    value={selectedCountry}
                    onChange={(e) => {
                      const selectedCountry = filteredCountries.find(
                        (data) => data.name.common === e.target.value
                      );
                      handleCountrySelect(
                        selectedCountry.name.common,
                        selectedCountry.cca2
                      );
                    }}
                    onFocus={() => setShowOptions(true)}
                    onBlur={() => setShowOptions(false)}
                  >
                    {filteredCountries.map((data) => (
                      <option key={data.cca2} value={data.name.common}>
                        {data.name.common}
                      </option>
                    ))}
                  </select>
                  <div className="password-icon">
                    {showOptions ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                </div>
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
                <div className="input-group">
                  <PhoneInput
                    country={countryCode}
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    containerClass="react-phone-input"
                    inputClass="form-control"
                    inputProps={{ required: true }}
                  />
                </div>
                {!valid && (
                  <div className="invalid-feedback">Invalid phone number</div>
                )}
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
            Already a user?{" "}
            <Link to="/login" id="pageLink">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
