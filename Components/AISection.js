// Components/AISection.js
import { useState } from "react";
import { generateCode } from "./AiCodeGenerator";

export default function AISection() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = async () => {
    const code = await generateCode(input);
    setOutput(code);
  };

  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-bold">AI Code Generator</h2>
      <textarea
        className="border p-2 w-full my-2"
        placeholder="Enter your algorithm prompt here..."
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleClick}
      >
        Generate Code
      </button>
      {output && (
        <pre className="mt-4 p-2 bg-gray-200 rounded text-left overflow-x-auto whitespace-pre-wrap">
          {output}
        </pre>
      )}
    </div>
  );
}
