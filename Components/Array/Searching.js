import { useState } from "react";

export default function Searching() {
  const [array, setArray] = useState([5, 2, 9, 1, 6]);
  const [input, setInput] = useState("");
  const [target, setTarget] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [foundIndex, setFoundIndex] = useState(null);
  const [searching, setSearching] = useState(false);
  const [step, setStep] = useState(0);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleArrayInput = () => {
    const nums = input
      .split(",")
      .map((x) => parseInt(x.trim()))
      .filter((x) => !isNaN(x));
    setArray(nums);
    setStep(0);
    setFoundIndex(null);
    setActiveIndex(-1);
  };

  const handleSearch = async () => {
    if (!target || isNaN(target)) return;
    setSearching(true);
    const tgt = parseInt(target);
    let found = false;

    for (let i = 0; i < array.length; i++) {
      setActiveIndex(i);
      setStep((prev) => prev + 1);
      await sleep(500);
      if (array[i] === tgt) {
        setFoundIndex(i);
        found = true;
        break;
      }
    }

    if (!found) setFoundIndex(-1);
    setActiveIndex(-1);
    setSearching(false);
  };

  return (
    <div className="text-center mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Linear Search Visualizer</h1>

      {/* Array input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter array (e.g. 4,2,7)"
          className="px-3 py-2 border border-gray-400 rounded-md w-72"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={searching}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-amber-600"
          onClick={handleArrayInput}
          disabled={searching}
        >
          Set Array
        </button>
      </div>

      {/* Target input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter number to search"
          className="px-3 py-2 border border-gray-400 rounded-md w-72"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          disabled={searching}
        />
        <button
          className="ml-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={handleSearch}
          disabled={searching}
        >
          Start Search
        </button>
      </div>

      {/* Step info */}
      <p className="text-xl font-medium mb-4">Step: {step}</p>

      {/* Array bars */}
      <div className="flex justify-center gap-2 mb-4 min-h-[150px]">
        {array.map((num, idx) => (
          <div
            key={idx}
            className={`w-10 h-16 flex items-center justify-center rounded ${
              idx === foundIndex
                ? "bg-green-600"
                : idx === activeIndex
                ? "bg-red-500"
                : "bg-blue-500"
            } text-white font-bold`}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Result */}
      {foundIndex !== null && (
        <p className="text-xl font-semibold">
          {foundIndex === -1
            ? "Target not found!"
            : `Target found at index: ${foundIndex}`}
        </p>
      )}
    </div>
  );
}
