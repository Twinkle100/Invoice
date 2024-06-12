import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TableForm.css";

import Row from "./Row";
export default function TableForm() {
  const [rows, setRows] = useState([
    { description: "", quantity: 0, price: 0, amount: 0 },
  ]);
  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    if (field === "quantity" || field === "price") {
      newRows[index].amount = newRows[index].quantity * newRows[index].price;
    }
    setRows(newRows);
  };
  const addRow = () => {
    setRows([...rows, { description: "", quantity: 0, price: 0, amount: 0 }]);
  };

  const handleDeleteRow = (index) => {
    const newRows = rows.filter((row, rowIndex) => rowIndex !== index);
    setRows(newRows);
  };

  return (
    <>
      <form>
        <div className="table-responsive mb-3 mt-5">
          <table className="table ">
            <thead className="bg-secondary text-dark">
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <Row
                  key={index}
                  row={row}
                  rows={rows}
                  index={index}
                  handleInputChange={handleInputChange}
                  handleDeleteRow={handleDeleteRow}
                />
              ))}
            </tbody>
          </table>
        </div>
        <button
          type="button" // Change to "button" to prevent form submission
          onClick={addRow}
          className="bg-success text-white border border-success rounded ps-2 pe-2 pt-1 pb-1"
        >
          Add Item
        </button>
      </form>
    </>
  );
}
