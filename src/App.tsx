import { BrowserRouter } from 'react-router-dom';
import Nav from './layout/Nav/Nav';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RoutesConfig from './routes/Routes';
import Volunteer from './pages/Volunteer/Volunteer'
import PlaceDetails from './pages/PlaceDetails/PlaceDetails';
const randomPlace = {
  placeDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  placeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeZ5mVbarupP8UWVic7UtumtbIyE0GY-ucQ&usqp=CAU",
  placeLooksFor: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  placeFullName: "Random Place",
  placeAvailableDays: ['שני'],
  placeAddress: "123 Main St, City, Country",
};

function App() {
  return (
    <BrowserRouter>
      {/* <Nav/> */}
      {/* <RoutesConfig/> */}
      <PlaceDetails {...randomPlace} />
      {/* <Login/> */}
      {/* <Home /> */}
      {/* <Volunteer/> */}
      {/* <Register /> */}
    </BrowserRouter>
  );
}

export default App;
