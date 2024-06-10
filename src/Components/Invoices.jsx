import React, { useState } from "react";
import "./Invoices.css";
import Header from "./Header";

import MainDetails from "./MainDetails";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Notes from "./Notes";
import Table from "./Table";
import Footer from "./Footer";

export default function Invoices() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [bankName, setBankName] = useState();
  const [bankAccount, setbankAccount] = useState();
  const [website, setWebsite] = useState();
  const [client, setClient] = useState();
  const [clientAddress, setClientAddress] = useState();
  const [invoiceNumber, setInvoiceNumber] = useState();
  const [invoiceDate, setInvoiceDate] = useState();
  const [dueDate, setDueDate] = useState();
  const [notes, setNotes] = useState();
  return (
    <>
      <main className="p-5  lg:p-0 bg-white rounded shadow mt-5  mx-auto invoice">
        {showInvoice ? (
          <div>
            <Header />
            <MainDetails name={name} address={address} />
            <ClientDetails clientName={client} clientDetails={clientAddress} />
            <Dates
              invoiceDate={invoiceDate}
              invoiceNumber={invoiceNumber}
              dueDate={dueDate}
            />
            <Table />
            <Notes notes={notes} />

            <Footer
              name={name}
              address={address}
              email={email}
              phone={phone}
              bankname={bankName}
              accountholder={name}
              accountnumber={bankAccount}
            />
            <button className="MT-5 " onClick={() => setShowInvoice(false)}>
              Edit Information
            </button>
          </div>
        ) : (
          <div className="d-flex flex-column text-align-center justify-content-center">
            <div className="row g-3 mt-1 mb-1">
              <div className="col-lg-6 col-sm-12 d-flex flex-column">
                <label htmlFor="name">Enter Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 d-flex flex-column">
                <label htmlFor="address">Enter Your Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter Your Address"
                  autoComplete="off"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row g-3 mt-1 mb-1">
              <div className="col-lg-4 col-sm-12 d-flex flex-column">
                <label htmlFor="email">Enter Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column">
                <label htmlFor="website">Enter Your Website</label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="Enter Your Website"
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column">
                <label htmlFor="phone">Enter Your PhoneNumber</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Your phone"
                  autoComplete="off"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row g-3 mt-1 mb-1">
              <div className="col-lg-6 col-sm-12 d-flex flex-column">
                <label htmlFor="bankName">Enter Your BankName</label>
                <input
                  type="text"
                  name="bankName"
                  id="bankName"
                  placeholder="Enter Your BankName"
                  autoComplete="off"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 d-flex flex-column">
                <label htmlFor="bankNumber">Enter Your BankNumber</label>
                <input
                  type="text"
                  name="bankNumber"
                  id="bankNumber"
                  placeholder="Enter Your BankNumber"
                  autoComplete="off"
                  value={bankAccount}
                  onChange={(e) => setbankAccount(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row g-3 mt-1 mb-1">
              <div className="col-lg-6 col-sm-12 d-flex flex-column">
                <label htmlFor="client">Enter Your clientName</label>
                <input
                  type="text"
                  name="client"
                  id="client"
                  placeholder="Enter Your client Name"
                  autoComplete="off"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-6 col-sm-12 d-flex flex-column">
                <label htmlFor="clientAddress">Enter Your clientAddress</label>
                <input
                  type="text"
                  name="clientAddress"
                  id="clientAddress"
                  placeholder="Enter Your clientAddress"
                  autoComplete="off"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row g-3 mt-1 mb-1">
              <div className="col-lg-4 col-sm-12 d-flex flex-column">
                <label htmlFor="invoiceNumber">Enter Your invoiceNumber</label>
                <input
                  type="date"
                  name="invoiceNumber"
                  id="invoiceNumber"
                  placeholder="Enter Your invoiceNumber"
                  autoComplete="off"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column">
                <label htmlFor="invoiceDate">Enter Your invoiceDate</label>
                <input
                  type="date"
                  name="invoiceDate"
                  id="invoiceDate"
                  placeholder="Enter Your invoiceDate"
                  autoComplete="off"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-4 col-sm-12 d-flex flex-column">
                <label htmlFor="invoiceDate">Enter Your dueDate</label>
                <input
                  type="text"
                  name="dueDate"
                  id="dueDate"
                  placeholder="Enter Your dueDate"
                  autoComplete="off"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row g-3 mt-1 mb-1">
              <div className="col-lg-12 col-sm-12 d-flex flex-column">
                <label htmlFor="notes">Enter Your Note</label>
                <textarea
                  name="notes"
                  id="notes"
                  col="30"
                  row="10"
                  placeholder="Enter Your Notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>
            </div>

            <button
              onClick={() => {
                setShowInvoice(true);
              }}
              className="btn btn-primary mt-4 mb-4"
            >
              Preview
            </button>
          </div>
        )}
      </main>
    </>
  );
}
