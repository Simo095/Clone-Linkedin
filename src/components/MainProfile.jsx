import Analysis from "./Analysis";
import Formazione from "./Formazione";
import Interessi from "./Interessi";
import MainHeader from "./MainHeader";
import Resources from "./Resources";
import Suggested from "./Suggested";
import "../style/profilePage.css";

const MainProfile = () => {
  return (
    <>
      <MainHeader />
      <Suggested />
      <Analysis />
      <Resources />
      <Formazione />
      <Interessi />
    </>
  );
};

export default MainProfile;
