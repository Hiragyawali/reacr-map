import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Service from "./Service.jsx";
import Gallery from "./Gallery.jsx";
import Book from "./Book.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Productlist from "./components/Productlist.jsx";
import Button from "./button.jsx";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  return (

    <Router>
      <Navbar />
      <div className=" bg-amber-700 content-center">
     <Button/>
     </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Productlist/>
      <Service />
      <Gallery />
      <About />
      <Contact />
     
   

    </Router>
  );
};

export default App;