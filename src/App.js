import { Routes, Route, Link, useParams } from "react-router-dom";
import Nav from "./components/Nav";
import ConfigRoutes from "./routes/ConfigRoutes";

function App() {
  return (
    <div>
      <Nav />
      <ConfigRoutes />
      <nav className="">
        <li className="">
          <Link to="/volunteers">volunteers</Link>
        </li>
      </nav>
    </div>
  );
}

export default App;
