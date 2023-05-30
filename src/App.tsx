import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './routes/Routes';
const randomPlace = {
  placeDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  placeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeZ5mVbarupP8UWVic7UtumtbIyE0GY-ucQ&usqp=CAU",
  placeLooksFor: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  placeFullName: "Random Place",
  placeAvailableDays: ['שני'],
  placeAddress: "123 Main St, City, Country",
};





const App=()=> {
  return (
    <BrowserRouter>
      <RoutesConfig/>
    </BrowserRouter>
  );
}

export default App;
