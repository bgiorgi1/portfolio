import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
// import Portfolio from "./components/portfolio/Portfolio"
// import Works from "./components/works/Works"
// import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./App.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects";
import About from "./components/about/About"
import YouTube from "./components/youtube/YouTube";
import Footer from "./components/footer/Footer";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <About/>
       <Projects/>
      
       <Skills/>
       <YouTube/>
       <Contact/>
       <Footer/>
       
      
     </div>
    </div>
  );
}

export default App;

