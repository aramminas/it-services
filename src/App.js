import React from "react";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Special from "./components/Special/Special";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Layout/Footer";

import './App.css';
import './styles/style.css';
import './scss/main.scss';

function App() {

    return (
        <div className="App">
            <Header/>
            <Home />
            <Services />
            <Special />
            <About />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;
