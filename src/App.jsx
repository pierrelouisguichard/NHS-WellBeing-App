import Landing from "./Landing";
import Home from "./Home";
import Error from "./Error";
import Login from "./Login";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";
import Report from "./Report";

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
      </Routes>
    </>
  );
}

export default App;
