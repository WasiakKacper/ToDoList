import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAndRegister from "./Components/LoginAndRegister/LoginAndRegister.tsx";
import Home from "./Components/Home/Home.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAndRegister />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
