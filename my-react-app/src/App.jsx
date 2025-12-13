import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Aboutpage from "./Components/AboutPage/Aboutpage";
import Wedding from "./Components/Weddingpage/Wedding";
import Gallery from "./Components/Gallery/Gallery";
import Costume from "./Components/Costumes/Costume";
import BookNow from "./Components/Booknow/Booknow";
import { Routes, Route } from "react-router-dom";
import Contactuss from "./Components/Contactus.jsx/Contactuss";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/costumes" element={<Costume />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/contactus" element={<Contactuss />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
