import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FeaturedProjects from "./Pages/Featured-Projects"; // Corrected name
import AboutMe from "./Pages/AboutMe"; // Corrected name
import ContactMe from "./Pages/ContactMe"; // Correc
import Hero from "./components/Hero";
import tech from "./assets/images/tech.png";
import Card from "./components/Card";
import FetchApi from "./components/FetchApi";
import Services from "./components/Services";
import Bio from "./components/Bio";
import Touch from "./components/Touch";
import Footer from "./components/Footer";
import { useRef } from "react";





function App() {
  const aboutSectionRef = useRef(null);
  const featuredSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const scrollToContactSection = ()=>{
    if(contactSectionRef.current){
      contactSectionRef.current.scrollIntoView({behavior:'smooth'});
    }
  };
  const scrollToFeaturedSection =() => {
    if(featuredSectionRef.current){
      featuredSectionRef.current.scrollIntoView({behavior:'smooth'});
    }
  };
  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${tech})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      {/* <BrowserRouter> */}
      <Header scrollToSection={scrollToAboutSection} scrollToFeatured={scrollToFeaturedSection} scrollToContact={scrollToContactSection}/>
      <Hero />
      <Card />
      <Services ref={featuredSectionRef}/>
      <Bio ref={aboutSectionRef} /> 
      <Touch ref={contactSectionRef}/>
      <Footer />
      
      {/* <Route path="/About-me" ref={aboutSectionRef} element={<AboutMe />} /> */}

      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Featured-projects" element={<FeaturedProjects />} />
          <Route path="/Contact-me" element={<ContactMe />} />
        </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
