// Components/Array/SortVisualizer.js
import { useParams } from "react-router-dom";
import Sorting from "./Sorting";
import Searching from "./Searching";
// import PrefixSum from "./PrefixSum"; // Add as needed

export default function SortVisualizer() {
  const { model } = useParams();

  const componentMap = {
    Sorting: <Sorting />,
    Searching: <Searching />,
    // PrefixSum: <PrefixSum />,
  };

  return componentMap[model] || (
    <div className="text-center mt-10 text-red-600 text-xl">
      ⚠️ Model "{model}" not found.
    </div>
  );
}
