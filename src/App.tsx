import { BrowserRouter } from 'react-router-dom';
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
