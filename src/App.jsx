import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import InfoBody from "./components/InfoBody/InfoBody.jsx";
import "./App.style.css";

const App = () => {
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
