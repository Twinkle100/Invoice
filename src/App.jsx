import { useState } from "react";

import Register from "./Components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./App.css";

function App() {
  // const [page, setpage] = useState(false);
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
