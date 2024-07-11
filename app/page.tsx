import { generatePrompt } from "./actions";
import GeneratePromptForm from "./generate-prompt-form";

export default async function Home() {
  const initialPrompt = (await generatePrompt()).prompt;

  return (
    <main>
      <h1 className="font-bold text-xl">Journal Prompts</h1>

      <GeneratePromptForm initialPrompt={initialPrompt} />
    </main>
  );
}
