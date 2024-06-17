import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { FiPercent } from "react-icons/fi";
import { FaRepeat } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import "./Calculation.css";

export default function Calculation({ rows }) {
  const subTotal = rows.reduce((acc, curr) => acc + curr.amount, 0);
  const [isPercentage, setIsPercentage] = useState(true);
  const [isTax, setIsTax] = useState(true);
  const [isShipping, setIsShipping] = useState(true);
  const toggleSymbol = () => {
    setIsPercentage(!isPercentage);
    setIsTax(!isTax);
    setIsShipping(!isShipping);
  };

  return (
    <>
      <h6>SubTotal:</h6>
      <span>{subTotal.toFixed(2)}</span>
      <div>
        <p>
          <MdAdd />
          Discount
        </p>
        <div className="position-relative discount-input">
          {!isPercentage && (
            <FontAwesomeIcon icon={faRupeeSign} className="symbol-icon" />
          )}
          <input
            type="text"
            className={isPercentage ? "percentage" : "rupee"}
            placeholder={
              isPercentage ? "Enter discount (%)" : "Enter discount (₹)"
            }
          />
          {isPercentage && <FiPercent className="symbol-icon percenticon" />}
          <FaRepeat
            className="changer position-absolute toggleicon"
            onClick={toggleSymbol}
          />
        </div>
      </div>
      <div>
        <p>
          <MdAdd />
          Tax
        </p>
        <div className="position-relative discount-input">
          {!isTax && (
            <FontAwesomeIcon icon={faRupeeSign} className="symbol-icon" />
          )}
          <input
            type="text"
            className={isTax ? "percentage" : "rupee"}
            placeholder={isTax ? "Enter Tax (%)" : "Enter Tax (₹)"}
          />
          {isTax && <FiPercent className="symbol-icon percenticon" />}
          <FaRepeat
            className="changer position-absolute toggleicon"
            onClick={toggleSymbol}
          />
        </div>
      </div>
      <div>
        <p>
          <MdAdd />
          Shipping
        </p>
        <div className="position-relative discount-input">
          {!isShipping && (
            <FontAwesomeIcon icon={faRupeeSign} className="symbol-icon" />
          )}
          <input
            type="text"
            className={isShipping ? "percentage" : "rupee"}
            placeholder={
              isShipping ? "Enter Shipping (%)" : "Enter Shipping (₹)"
            }
          />
          {isShipping && <FiPercent className="symbol-icon percenticon" />}
          <FaRepeat
            className="changer position-absolute toggleicon"
            onClick={toggleSymbol}
          />
        </div>
      </div>
    </>
  );
}
