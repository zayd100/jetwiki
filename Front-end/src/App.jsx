import React from "react";
import Cd from "./cardsdata";
import Navbar from "./navbar";
import Home from "./home";
import Ops from "./ops";
import Connections from "./connections";
import About from "./about";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App(){
      return(
        <Router>
          <Navbar />
          <Routes>
        <Route path = "/" element ={<Home />}/>
        <Route path = "/cardsdata" element = {<Cd />}/>
        <Route path = "/ops" element = {<Ops />}/>
        <Route path = "/connections" element = {<Connections/>}/>
     
        <Route path = "/about" element={<About/>}/>
       
 
          </Routes>

        </Router>
      );

}
export default App