import "./App.css";

import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/Pages/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurMusic from "./Components/Pages/OurMusic";
import Services from "./Components/Pages/Services";
import Portfolio from "./Components/Pages/Portfolio";
import ContactUs from "./Components/Pages/ContactUs";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ourMusic" element={<OurMusic />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
