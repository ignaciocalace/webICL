import React, { useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import InfoBody from "./components/InfoBody/InfoBody.jsx";
import "./App.style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="mainContainer">
      <Header />
      <main>
        <InfoBody />
      </main>
      <Footer />
    </div>
  );
};

export default App;
