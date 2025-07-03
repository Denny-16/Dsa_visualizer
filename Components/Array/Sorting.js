import { useState } from "react";

export default function BubbleSort() {
  const [array, setArray] = useState([5, 1, 4, 2, 8]);
  const [input, setInput] = useState("");
  const [active, setActive] = useState([-1, -1]);
  const [step, setStep] = useState(0);
  const [sorting, setSorting] = useState(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSetArray = () => {
    const nums = input
      .split(",")
      .map((x) => parseInt(x.trim()))
      .filter((x) => !isNaN(x));
    setArray(nums);
    setStep(0);
  };

  async function bubbleSort() {
    setSorting(true);
    let arr = [...array];
    let n = arr.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setActive([j, j + 1]);
        setStep((prev) => prev + 1);
        await sleep(500);

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
      }
    }

    setActive([-1, -1]);
    setSorting(false);
  }

  return (
    <div className="text-center mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Bubble Sort Visualizer</h1>

      <div className="mb-4">
        <input
          type="text"
          className="px-3 py-2 border border-gray-400 rounded-md w-72"
          placeholder="Enter numbers like 4,1,6"
          value={input}
          onChange={handleInputChange}
          disabled={sorting}
        />
        <button
          onClick={handleSetArray}
          className="ml-2 px-4 py-2 bg-blue-600 hover:bg-amber-600 text-white rounded"
          disabled={sorting}
        >
          Set Array
        </button>
      </div>

      <p className="text-xl mb-2 font-medium">Step: {step}</p>

      <div className="flex justify-center gap-2 mb-4 min-h-[200px]">
        {array.map((num, idx) => (
          <div
            key={idx}
            className={`w-10 flex items-end justify-center rounded ${
              active.includes(idx) ? "bg-red-500" : "bg-blue-500"
            } text-white transition-all duration-300`}
            style={{ height: `${num * 20}px` }}
          >
            {num}
          </div>
        ))}
      </div>

      <button
        className="bg-green-600 text-white px-6 py-2 rounded shadow-md hover:bg-green-700 disabled:opacity-50"
        onClick={bubbleSort}
        disabled={sorting}
      >
        Start Sorting
      </button>
    </div>
  );
}
