import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ArrayVisualizer from "./Components/Array/ArrayVisualizer";
import ProblemDisplay from "./Components/Array/ProblemDisplay";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Array" element={<ArrayVisualizer />} />
        <Route path="/Array/:model" element={<ProblemDisplay />} />
      </Routes>
    </Router>
  );
}
