import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './routes/Routes';
import { useIsFetching } from 'react-query';
import Spinner from './components/Spinner/Spinner';

const App = () => {
  const isFetching = useIsFetching();

  return (
    <>
      {isFetching ? <Spinner /> : null}
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </>
  );
};

export default App;
