import React from "react";

export default function Footer({
  name,
  email,
  phone,
  bankname,
  accountnumber,
  accountholder,
  website,
}) {
  return (
    <footer>
      <ul className="d-flex flex-row flex-wrap text-align-center justify-content-center">
        <li>
          <span className="fw-bold">Your Name</span>
          {name}
        </li>
        <li>
          <span className="fw-bold">Your Email</span>
          {email}
        </li>
        <li>
          <span className="fw-bold">Phone Number</span>
          {phone}
        </li>
        <li>
          <span className="fw-bold">Bank</span>
          {bankname}
        </li>
        <li>
          <span className="fw-bold">Account Holder</span>
          {accountnumber}
        </li>
        <li>
          <span className="fw-bold">Account Number</span>
          {accountholder}
        </li>
        <li>
          <span className="fw-bold">
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </span>
        </li>
      </ul>
    </footer>
  );
}
