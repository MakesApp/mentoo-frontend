import { BrowserRouter } from 'react-router-dom';
import Nav from './layout/Nav/Nav';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RoutesConfig from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      {/* <Nav/> */}
      {/* <RoutesConfig/> */}
      {/* <Login/> */}
      <Register />
    </BrowserRouter>
  );
}

export default App;
