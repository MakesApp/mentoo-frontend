import "./App.css";
import { Routes, Route, Link, useParams } from "react-router-dom";
import ConfigRoutes from "./routes/ConfigRoutes";

function App() {
  return (
    <div>
      <ConfigRoutes />
    </div>
  );
}

export default App;
