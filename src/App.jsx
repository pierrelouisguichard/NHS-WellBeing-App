import Landing from "./Landing";
import Home from "./Home";
import Error from "./Error";
import Login from "./Login";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";
import Report from "./Report";
import Report1 from "./Report1";
import Report2 from "./Report2";
import Report3 from "./Report3";
import Report4 from "./Report4";
import Report5 from "./Report5";
import TOS from "./TOS";
import TermsAndConditions from "./TermsAndConditions";
import WellbeingPage from "./WellbeingPage";
import BereavementAndLossPage from "./BereavementAndLossPage";
import HealthyEatingPhysicalHealthPage from "./HealthyEatingPhysicalHealthPage";
import MentalHealthPage from "./MentalHealthPage";
import StressAtWorkPage from "./StressAtWorkPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/report" element={<Report />} />
        <Route path="/report1" element={<Report1 />} />
        <Route path="/report2" element={<Report2 />} />
        <Route path="/report3" element={<Report3 />} />
        <Route path="/report4" element={<Report4 />} />
        <Route path="/report5" element={<Report5 />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/wellbeingpage" element={<WellbeingPage />} />
        <Route path="/bereavement" element={<BereavementAndLossPage />} />
        <Route
          path="/healthyeating"
          element={<HealthyEatingPhysicalHealthPage />}
        />
        <Route path="/mentalhealth" element={<MentalHealthPage />} />
        <Route path="/stressatwork" element={<StressAtWorkPage />} />
        <Route path="/tos" element={<TOS />} />
      </Routes>
    </>
  );
}

export default App;
