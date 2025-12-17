import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Aboutpage from "./Components/AboutPage/Aboutpage";
import Wedding from "./Components/Weddingpage/Wedding";
import Gallery from "./Components/Gallery/Gallery";
import Costume from "./Components/Costumes/Costume";
import Login from "./Components/Login/Login";
import Sign from "./Components/Sign/Sign";
import { Routes, Route } from "react-router-dom";
import FaqSection from "./Components/Faqpage/Faqq";
import Faqcontent from "./Components/Faqpage/Faqcontent";
import Hostsec from "./Components/Host/Hostsec";



function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/faqqq" element={<Faqcontent/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/costumes" element={<Costume />} />
        <Route path="/host" element={<Hostsec/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign" element={<Sign/>} />
      </Routes> 
   
      <Footer />

    </>
  );
}

export default App;
