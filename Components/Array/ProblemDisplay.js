import { useParams } from "react-router-dom";
import AISection from "../AISection";
import Sorting from "./Sorting";
import Searching from "./Searching";
// import PrefixSum from "./PrefixSum"; // add others as needed

const componentMap = {
  Sorting: <Sorting />,
  Searching: <Searching />,
  // PrefixSum: <PrefixSum />
};

export default function ProblemDisplay() {
  const { model } = useParams();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      {/* Left: AI Prompt + Code Section */}
      <div className="bg-white p-4 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">💡 AI Code Generator</h2>
        <AISection />
      </div>

      {/* Right: Visualizer */}
      <div className="bg-white p-4 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-green-700">📊 {model} Visualizer</h2>
        {componentMap[model] || (
          <p className="text-red-600 font-semibold">⚠️ Model "{model}" not found.</p>
        )}
      </div>
    </div>
  );
}
