import HomePage from "pages/homepage/HomePage";
import Login from "pages/Login/Login";
import PlacePage from "pages/PlacePage/PlacePage";
import VolunteerPage from "pages/VolunteerPage/VolunteerPage";

export const routes = Object.freeze({
  //   need to be dynamic :
  //   VOLUNTEERS: "/volunteers/:volunteerId",
  HOME: "/",
  LOGIN: "/login",
  VOLUNTEERS: "/volunteers",
  PLACE: "/places/:placeId",
  CHAT: "/chat",
});
