// Components/Array/ArrayVisualizer.js
import { useNavigate } from "react-router-dom";

export default function ArrayVisualizer() {
  const navigate = useNavigate();

  const models = [
    "Sorting",
    "Searching",
    "Sliding Window",
    "Prefix Sum",
    "Two Pointer",
    "Kadane’s Algo",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500">
      <h1 className="text-2xl font-bold mb-6 bg-white px-4 py-2 rounded shadow">Select an Array Model</h1>
      <div className="flex flex-wrap gap-4 bg-white px-6 py-4 rounded shadow-lg max-w-[90%] justify-center">
        {models.map((model, idx) => (
          <button
            key={idx}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition text-sm font-medium"
            onClick={() => navigate(`/Array/${model.replace(/\\s+/g, '')}`)} // remove spaces from route
          >
            {model}
          </button>
        ))}
      </div>
    </div>
  );
}
