import { BrowserRouter } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
import RoutesConfig from './routes/Routes';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </>
  );
};

export default App;
