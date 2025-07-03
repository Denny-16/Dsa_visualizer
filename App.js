import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ArrayVisualizer from "./Components/Array/ArrayVisualizer";
import SortVisualizer from "./Components/Array/SortVisualizer";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Route to model visualizer for Array */}
        <Route path="/Array" element={<ArrayVisualizer />} />

        {/* Route to specific problem like sorting */}
        <Route path="/Array/:model" element={<SortVisualizer />} />
      </Routes>
    </Router>
  );
}
