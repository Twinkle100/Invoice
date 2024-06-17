import React, { useState } from "react";
import "./Invoices.css";
import Header from "./Header";
import MainDetails from "./MainDetails";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Notes from "./Notes";
import Table from "./Table";
import Footer from "./Footer";
import TableForm from "./TableForm";

export default function Invoices() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [invoiceDate, setInvoiceDate] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [client, setClient] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [rows, setRows] = useState([
    { description: "", quantity: 0, price: 0, amount: 0 },
  ]);
  const [logo, setLogo] = useState(null);

  const handleLogoChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleRemoveLogo = (e) => {
    e.stopPropagation();
    setLogo(null);
  };

  const handleDivClick = () => {
    document.getElementById("logo").click();
  };

  return (
    <>
      <main className="p-5 lg:p-0 rounded shadow mt-5 mx-auto invoice">
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
            <Table rows={rows} />
            <Notes notes={notes} />
            <Footer name={name} address={address} email={email} phone={phone} />
            <button className="mt-5" onClick={() => setShowInvoice(false)}>
              Edit Information
            </button>
          </div>
        ) : (
          <div className="d-flex flex-column text-align-center justify-content-center">
            <div className="row d-flex justify-content-between mt-1 mb-1">
              <div className="col-lg-6 col-sm-12 d-flex flex-column">
                <div
                  htmlFor="logo"
                  style={{ cursor: "pointer" }}
                  className="logodiv"
                >
                  <div className="logo-input" onClick={handleDivClick}>
                    {logo ? (
                      <div className="logo-container">
                        <img src={logo} alt="Logo" className="logo-preview" />
                        <button
                          className="close-icon"
                          onClick={handleRemoveLogo}
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <span>+ Add Logo</span>
                    )}
                  </div>
                </div>
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleLogoChange}
                />
              </div>
              <div className="col-lg-3 col-sm-12 d-flex flex-column">
                <div className="row">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Enter Your invoiceNumber"
                    autoComplete="off"
                    value={`#${invoiceNumber}`}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
                <div className="row d-flex flex-column">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    autoComplete="off"
                    placeholder="Enter Your invoiceDate"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-1 mb-1">
              <div className="col-lg-6 col-sm-12 g-3 mt-1 mb-1">
                <div className="col-lg-12 col-sm-12 d-flex flex-column">
                  <label htmlFor="name">Enter Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-lg-12 col-sm-12 d-flex flex-column">
                  <label htmlFor="address">Enter Your Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter Your Address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 g-3 mt-1 mb-1">
                <div className="col-lg-12 col-sm-12 d-flex flex-column">
                  <label htmlFor="client">Enter Your clientName</label>
                  <input
                    type="text"
                    name="client"
                    id="client"
                    placeholder="Enter Your client Name"
                    autoComplete="off"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                  />
                </div>
                <div className="col-lg-12 col-sm-12 d-flex flex-column">
                  <label htmlFor="clientAddress">
                    Enter Your clientAddress
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter Your clientAddress"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row g-3 mt-1 mb-1">
              <div className="col-lg-3 col-sm-12 d-flex flex-column">
                <label htmlFor="email">Enter Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-lg-3 col-sm-12 d-flex flex-column">
                <label htmlFor="website">Enter Your Website</label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="Enter Your Website"
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <div className="col-lg-3 col-sm-12 d-flex flex-column">
                <label htmlFor="phone">Enter Your PhoneNumber</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Your phone"
                  autoComplete="off"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="col-lg-3 col-sm-12 d-flex flex-column">
                <label htmlFor="dueDate">Enter Your dueDate</label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  placeholder="Enter Your dueDate"
                  autoComplete="off"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </div>
            <div className="row g-3 mt-1 mb-1">
              <TableForm rows={rows} setRows={setRows} />
            </div>
            <div className="row g-3 mt-1 mb-1">
              <div className="col-lg-12 col-sm-12 d-flex flex-column">
                <label htmlFor="notes">Enter Your Note</label>
                <textarea
                  name="notes"
                  id="notes"
                  col="30"
                  row="30"
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
