
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [selectedDS, setSelectedDS] = useState(null);
  const navigate = useNavigate();

  const algos = ["Array", "String", "Stacks", "Graph", "Queue", "DP"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-600 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-serif font-bold mb-6 px-4 py-2 bg-white rounded shadow-lg">
        DSA VISUALIZER
      </h1>

      <div className="flex flex-wrap bg-white rounded-sm shadow-lg py-4 px-4 gap-3 justify-center">
        {algos.map((currEle, index) => (
          <button
            key={index}
            onClick={() => navigate(`/${currEle}`)}
            className={`px-4 py-2 rounded-md text-white font-semibold transition bg-blue-600 hover:bg-blue-700`}
          >
            {currEle}
          </button>
        ))}
      </div>
    </div>
  );
}
