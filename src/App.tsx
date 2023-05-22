import { BrowserRouter } from 'react-router-dom';
import Nav from './layout/Nav/Nav';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RoutesConfig from './routes/Routes';
import Volunteer from './pages/Volunteer/Volunteer'

function App() {
  return (
    <BrowserRouter>
      {/* <Nav/> */}
      <RoutesConfig/>
      {/* <Login/> */}
      {/* <Home /> */}
      {/* <Volunteer/> */}
      {/* <Register /> */}
    </BrowserRouter>
  );
}

export default App;
