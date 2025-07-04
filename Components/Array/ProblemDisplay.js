import { useParams } from "react-router-dom";
import AISection from "../AISection";
import Sorting from "./Sorting";
import Searching from "./Searching";

const componentMap = {
  Sorting: <Sorting />,
  Searching: <Searching />,
};

export default function ProblemDisplay() {
  const { model } = useParams();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">💡 AI Code Generator</h2>
        <AISection prompt={`Give me code for ${model} in JavaScript`} />

      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">📊 {model} Visualizer</h2>
        {componentMap[model] || <p>Model "{model}" not found.</p>}
      </div>
    </div>
  );
}
