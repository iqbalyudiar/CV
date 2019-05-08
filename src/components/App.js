import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Portofolio from "./Portofolio";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home id="home-section" />
        <About id="about-head-section" />
        <Portofolio id="portofolio-head-section" />
        <Contact id="contact-head-section" />
        <Footer />
      </div>
    );
  }
}

export default App;
