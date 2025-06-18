import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { CoffeeScrollUI } from "./components/CoffeeScrollUI";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
    const [landingPageData, setLandingPageData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setLandingPageData(JsonData);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navigation />
            <CoffeeScrollUI />
            <Header data={landingPageData.Header || {}} />
            <Features data={landingPageData.Features || []} />
            <About data={landingPageData.About || {}} />
            <Services data={landingPageData.Services || []} />
            <Gallery data={landingPageData.Gallery || []} />
            <Contact data={landingPageData.Contact || {}} />
        </div>
    );
};


export default App;
