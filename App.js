import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ArrayVisualizer from "./Components/Array/ArrayVisualizer";
import SortVisualizer from "./Components/Array/SortVisualizer";
import AISection from "./Components/AISection"; // 👈 import it

export default function App() {
  return (
    <Router>
      <div className="flex">
        {/* Left side: AI Section */}
        <div className="w-1/2 p-4 border-r border-gray-300 h-screen overflow-auto">
          <AISection />
        </div>

        {/* Right side: Visualizer UI based on routing */}
        <div className="w-1/2 p-4 h-screen overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Array" element={<ArrayVisualizer />} />
            <Route path="/Array/:model" element={<SortVisualizer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
