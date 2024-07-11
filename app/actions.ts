"use server";

export async function generatePrompt() {
  // wait for 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    prompt: [
      "What are you grateful for today?",
      "What are you proud of today?",
      "What are you looking forward to tomorrow?",
      "What are you feeling right now?",
    ].sort(() => Math.random() - 0.5)[0],
  };
}
