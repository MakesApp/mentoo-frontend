import IndexRoutes from "./components/IndexRoutes";
import VolunteerPage from "./pages/volunteer page/components/VolunteerPage";
import { Routes, Route, Link, useParams } from "react-router-dom";
import ConfigRoutes from "./routes/ConfigRoutes";

function App() {
  return (
    <div>
      {/* <IndexRoutes /> */}
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
