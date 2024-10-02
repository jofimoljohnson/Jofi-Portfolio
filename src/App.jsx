import Hero from "./sections/Hero/Hero";
import "./App.css";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

const App = () => {
    return (
        <div>
            <Hero />
            <Projects />
            <div className="mt-5">
                <Skills />
             
            </div>
            <div className="mt-5">
            <Contact/>
            </div>
            <div className="mt-5">
                <Footer/>
            </div>
       
        </div>
    );
};

export default App;
