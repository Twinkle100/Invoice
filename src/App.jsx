import React, { useState } from "react";
import Register from "./Components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Invoices from "./Components/Invoices";
// import "./App.css";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/invoices",
      element: <Invoices />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
