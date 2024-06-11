import React, { useEffect } from "react";

export default function Table({ descriptions, quantity, price, amount }) {
  useEffect(() => {
    const check = () => {
      quantity = parseFloat(quantity) || 0;
      price = parseFloat(price) || 0;
    };
    check(amount);
  }, [price, quantity]);

  return (
    <>
      <table width={"100%"}>
        <thead className="bg-secondary text-dark">
          <tr className="">
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{descriptions}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{amount}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
