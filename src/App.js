import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OTPVerification from "./pages/OTPVerification";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Complaints from "./pages/Complaints";
import AdminComplaints from "./pages/AdminComplaints";
import About from "./pages/About";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/verify-otp' element={<OTPVerification />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/AdminComplaints" element={<AdminComplaints />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
};

export default App;