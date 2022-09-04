import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Currency from "./components/Currency/Currency";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies" element={<Currency />} />
        <Route path="/currencies/:coinid" element={<Currency />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
