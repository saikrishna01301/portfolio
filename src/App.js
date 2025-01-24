import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.component";
import Home from "./Components/Home/Home.component";
import Skills from "./Components/Skills/Skills.component";
import Projects from "./Components/Projects/Projects.component";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
