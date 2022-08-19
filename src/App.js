import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Faq } from "./components/pages/Faq";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Services } from "./components/pages/Services";
import { NotFound } from "./components/pages/NotFound";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Faq" element={<Faq />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
