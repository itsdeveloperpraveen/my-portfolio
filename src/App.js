import Navbar from "./Components/Navbar/navbar.js";
import Intro from "./Components/Intro/intro.js";
import About from "./Components/About/about.js";
import Projects from "./Components/Projects/projects.js";
import Contact from "./Components/Contact/contact.js"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Contact/>
    </div>
  );
}

export default App;
