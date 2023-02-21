import "./App.css";
import { Routes, Route, Link, useParams } from "react-router-dom";
import ConfigRoutes from "./routes/ConfigRoutes";

function App() {
  return (
    <div>
      <ConfigRoutes />
      <nav className="">
        <li className=""></li>
      </nav>
    </div>
  );
}

export default App;
