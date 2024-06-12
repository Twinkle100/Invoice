import React from "react";
import { MdDelete } from "react-icons/md";

export default function Row({
  row,
  rows,
  index,
  handleInputChange,
  handleDeleteRow,
}) {
  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            placeholder="Item description"
            // value={row.description}
            onChange={(e) => {
              handleInputChange(index, "description", e.target.value);
            }}
          />
        </td>
        <td>
          <input
            type="text"
            name="quantity"
            id="quantity"
            className="form-control"
            placeholder="Quantity"
            // value={row.quantity}
            onChange={(e) => {
              // setQuantity(e.target.value);
              handleInputChange(
                index,
                "quantity",
                parseFloat(e.target.value) || 0
              );
            }}
          />
        </td>
        <td>
          <input
            type="text"
            name="price"
            id="price"
            className="form-control"
            placeholder="Item price"
            // value={row.price}
            onChange={(e) => {
              // setPrice(e.target.value);
              handleInputChange(
                index,
                "price",
                parseFloat(e.target.value) || 0
              );
            }}
          />
        </td>
        <td>
          <input
            type="text"
            name="amount"
            id="amount"
            className="form-control"
            placeholder="Item amount"
            value={row.amount}
            readOnly
          />
        </td>
        <td className="text-center align-middle">
          {rows.length > 1 && (
            <MdDelete
              size={25}
              color="#7038D6"
              onMouseEnter={(e) => (e.currentTarget.style.color = "black")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7038D6")}
              onClick={() => handleDeleteRow(index)}
              style={{ cursor: "pointer" }}
            />
          )}
        </td>
      </tr>
    </>
  );
}
