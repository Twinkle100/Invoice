import { useState } from "react";

import Register from "./Components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import "./App.css";

function App() {
  const [page, setpage] = useState(false);

  return <>{page === true ? <Register /> : <Login />}</>;
}

export default App;
