// Components/AiCodeGenerator.js
import OpenAI from "openai";

// ⚠️ Never expose API keys like this in production!
const openai = new OpenAI({
  apiKey: "sk-REPLACE_WITH_YOUR_REAL_KEY", // Put this in a .env if using backend
  dangerouslyAllowBrowser: true, // Required if you're using API key directly in frontend
});

export async function generateCode(prompt) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0]?.message?.content.trim();
}
