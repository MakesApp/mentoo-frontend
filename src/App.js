import "./App.css";
import React from "react";
import Nav from "./layout/Nav/Nav";
import ConfigRoutes from "./routes/ConfigRoutes";

function App() {
  return (
    <div>
      <Nav />
      <ConfigRoutes />
    </div>
  );
}

export default App;
