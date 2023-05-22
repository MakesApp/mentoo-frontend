
import {Route,useHistory} from 'react-router-dom'
import { useAuthContext } from '../context/useAuth';
import { PLACE_PAGE, VOLUNTEER_PAGE } from './routePath';
interface Props {
    element:JSX.Element
}
const UnauthenticatedOnlyRoute = ({ element }:Props) => {
  const { isAuthenticated,userRole } = useAuthContext();
    console.log(isAuthenticated,userRole);
  const history=useHistory();

  return isAuthenticated&&!userRole ? history.push(userRole?VOLUNTEER_PAGE:PLACE_PAGE) :element
};

export default UnauthenticatedOnlyRoute;
