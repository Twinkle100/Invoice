import React from "react";

export default function MainDetails({ name, address }) {
  return (
    <>
      <section className="d-flex flex-column align-items-end justify-content-end">
        <h4 className="fs-5 fw-normal fw-bold">{name}</h4>
        <p>{address}</p>
      </section>
    </>
  );
}
