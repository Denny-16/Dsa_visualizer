export async function generateCode(prompt) {
  try {
    const response = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    return data.code; // 👈 Must match backend response key
  } catch (err) {
    console.error("❌ Error fetching code:", err);
    return "Error: " + err.message;
  }
}
