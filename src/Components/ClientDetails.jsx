import React from "react";

export default function ClientDetails({ clientName, clientDetails }) {
  return (
    <>
      <section>
        <h4 className="fs-5 fw-bold">{clientName}</h4>
        <p>{clientDetails}</p>
      </section>
    </>
  );
}
