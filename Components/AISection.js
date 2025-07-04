import { useState } from "react";
import { generateCode } from "./AiCodeGenerator";

export default function AISection({ prompt }) {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    try {
      const result = await generateCode(prompt);
      setOutput(result);
    } catch (err) {
      setOutput("⚠️ Error fetching code: " + err.message);
    }
    setLoading(false);
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">AI Code Generator</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGenerate}
      >
        {loading ? "Generating..." : "Generate Code"}
      </button>
      {output && (
        <pre className="bg-black text-green-300 mt-4 p-3 rounded whitespace-pre-wrap">
          <code>{output}</code>
        </pre>
      )}
    </div>
  );
}
