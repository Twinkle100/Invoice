import React from "react";

export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
  return (
    <>
      <article className="mt-5 d-flex  align-items-end justify-content-end">
        <ul>
          <li>
            <span className="fw-bold">Invoice Number:</span>
            {invoiceNumber}
          </li>
          <li>
            <span className="fw-bold">Invoice Date:</span>
            {invoiceDate}
          </li>
          <li>
            <span className="fw-bold">Due Date:</span>
            {dueDate}
          </li>
        </ul>
      </article>
    </>
  );
}
