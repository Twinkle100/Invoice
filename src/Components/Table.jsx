import React from "react";

export default function Table() {
  return (
    <>
      <table width={"100%"}>
        <thead className="bg-secondary text-white">
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Potato</td>
            <td>3</td>
            <td>40</td>
            <td>120</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
