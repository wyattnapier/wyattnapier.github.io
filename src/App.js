import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
// import Recipes from "./Pages/Recipes";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/recipes" element={<Recipes />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
