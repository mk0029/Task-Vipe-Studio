import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import WordpressSarvice from "./components/WordpressSarvice";
import Integer from "./components/Intiger";
import LongTerm from "./components/LongTerm";
import AgileWordpress from "./components/AgileWordpress";
import Team from "./components/Team";
import Success from "./components/Success";
import Footer from "./components/Footer";
import FeaturedOn from "./components/FeaturedOn";
import { useEffect } from "react";
import BackToTOp from "./components/BackToTOp";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <div className=" overflow-hidden">
        <BackToTOp />
        <NavBar />
        <Header />
        <FeaturedOn />
        <Integer />
        <WordpressSarvice />
        <LongTerm />
        <AgileWordpress />
        <Team />
        <Success />
        <Footer />
      </div>
    </>
  );
}

export default App;
