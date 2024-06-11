import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TableForm.css";
import { v4 as uuidv4 } from "uuid";
export default function TableForm({
  descriptions,
  setDescriptions,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
}) {
  useEffect(() => {
    const amountfunc = () => {
      quantity = parseFloat(quantity) || 0;
      price = parseFloat(price) || 0;
      setAmount(quantity * price);
    };
    amountfunc();
  }, [price, quantity, setAmount]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      descriptions,
      quantity,
      price,
      amount,
    };
    setDescriptions("");
    setQuantity("");
    setPrice("");
    setAmount("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="table-responsive mb-3 mt-5">
          <table className="table ">
            <thead className="bg-secondary text-dark">
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="form-control"
                    placeholder="Item description"
                    value={descriptions}
                    onChange={(e) => {
                      setDescriptions(e.target.value);
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
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
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
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
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
                    value={amount}
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          type="submit"
          className="bg-success text-white border border-success rounded ps-2 pe-2 pt-1 pb-1"
        >
          Add Item
        </button>
      </form>
    </>
  );
}
