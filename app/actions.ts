"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "~/env";

const generativeAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
const model = generativeAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export async function generatePrompt() {
  const prompt =
    "Generate a prompt for a daily journal entry. Make it positive and uplifting. Max 2 sentences.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return {
    prompt: text,
  };
}
