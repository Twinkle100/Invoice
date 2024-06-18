import React, { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { FiPercent } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRepeat } from "react-icons/fa6";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import "./Calculation.css";

export default function Calculation({ rows }) {
  const subTotal = rows.reduce((acc, curr) => acc + curr.amount, 0);
  const [discount, setDiscount] = useState({ value: 0, isPercentage: true });
  const [tax, setTax] = useState({ value: 0, isPercentage: true });
  const [shipping, setShipping] = useState({ value: 0, isPercentage: true });

  useEffect(() => {
    calculateTotal();
  }, [discount, tax, shipping]);

  const calculateTotal = () => {
    let total = subTotal;
    discount.isPercentage && tax.isPercentage
      ? (total -=
          (subTotal * discount.value) / 100 -
          (((subTotal * discount.value) / 100) * tax.value) / 100)
      : (total -= discount.value + tax.value);

    !discount.isPercentage && tax.isPercentage
      ? (total -=
          discount.value - ((subTotal - discount.value) * tax.value) / 100)
      : (total -= tax.value - ((subTotal - tax.value) * discount.value) / 100);

    // if (tax.isPercentage) {
    //   total += (subTotal * tax.value) / 100;
    // } else {
    //   total += tax.value;
    // }

    if (shipping.isPercentage) {
      total += (subTotal * shipping.value) / 100;
    } else {
      total += shipping.value;
    }

    return total;
  };

  const handleDiscountChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setDiscount({ ...discount, value });
    } else {
      setDiscount({ ...discount, value: 0 });
    }
  };

  const handleTaxChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setTax({ ...tax, value });
    } else {
      setTax({ ...tax, value: 0 });
    }
  };

  const handleShippingChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setShipping({ ...shipping, value });
    } else {
      setShipping({ ...shipping, value: 0 });
    }
  };

  const toggleDiscountType = () => {
    setDiscount({ ...discount, isPercentage: !discount.isPercentage });
  };

  const toggleTaxType = () => {
    setTax({ ...tax, isPercentage: !tax.isPercentage });
  };

  const toggleShippingType = () => {
    setShipping({ ...shipping, isPercentage: !shipping.isPercentage });
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
          {!discount.isPercentage && (
            <FontAwesomeIcon icon={faRupeeSign} className="symbol-icon" />
          )}
          <input
            type="text"
            className={discount.isPercentage ? "percentage" : "rupee"}
            placeholder={
              discount.isPercentage
                ? "Enter discount (%)"
                : "Enter discount (₹)"
            }
            onChange={handleDiscountChange}
            value={discount.value}
          />
          {discount.isPercentage && (
            <FiPercent className="symbol-icon percenticon" />
          )}
          <FaRepeat
            className="changer position-absolute toggleicon"
            onClick={toggleDiscountType}
          />
        </div>
      </div>

      <div>
        <p>
          <MdAdd />
          Tax
        </p>
        <div className="position-relative discount-input">
          {!tax.isPercentage && (
            <FontAwesomeIcon icon={faRupeeSign} className="symbol-icon" />
          )}
          <input
            type="text"
            className={tax.isPercentage ? "percentage" : "rupee"}
            placeholder={tax.isPercentage ? "Enter Tax (%)" : "Enter Tax (₹)"}
            onChange={handleTaxChange}
            value={tax.value}
          />
          {tax.isPercentage && (
            <FiPercent className="symbol-icon percenticon" />
          )}
          <FaRepeat
            className="changer position-absolute toggleicon"
            onClick={toggleTaxType}
          />
        </div>
      </div>

      <div>
        <p>
          <MdAdd />
          Shipping
        </p>
        <div className="position-relative discount-input">
          {!shipping.isPercentage && (
            <FontAwesomeIcon icon={faRupeeSign} className="symbol-icon" />
          )}
          <input
            type="text"
            className={shipping.isPercentage ? "percentage" : "rupee"}
            placeholder={
              shipping.isPercentage
                ? "Enter Shipping (%)"
                : "Enter Shipping (₹)"
            }
            onChange={handleShippingChange}
            value={shipping.value}
          />
          {shipping.isPercentage && (
            <FiPercent className="symbol-icon percenticon" />
          )}
          <FaRepeat
            className="changer position-absolute toggleicon"
            onClick={toggleShippingType}
          />
        </div>
      </div>

      <div className="total mt-3">
        <h6>Total:</h6>
        <span>{calculateTotal().toFixed(2)}</span>
      </div>
    </>
  );
}
