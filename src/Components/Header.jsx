// import React from "react";
import { useState } from "react";
export default function Header() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <header className="d-flex  align-items-center justify-content-between mb-3">
        <div>
          <h2 className="font-weight-bold text-uppercase tracking-wide">
            Invoice
          </h2>
        </div>
        <div>
          <ul className="d-flex align-items-center">
            <li>
              <button className="btn btn-print fs-6" onClick={handlePrint}>
                Print
              </button>
            </li>
            <li className="btn btn-download fs-6">Download</li>
            <li className="btn btn-send fs-6">Send</li>
          </ul>
        </div>
      </header>
    </>
  );
}
