import "./App.css";
import Home from "./Home";
import Error from "./Error";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
