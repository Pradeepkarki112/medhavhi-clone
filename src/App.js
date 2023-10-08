import "./App.css";
import Home from "./components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import TermsandCondition from "./components/Pages/TermsandCondition";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsandCondition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
