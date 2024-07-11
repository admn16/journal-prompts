"use client";

import { useFormStatus } from "react-dom";
import { generatePrompt } from "~/app/actions";
import { useCallback, useState } from "react";

export interface GeneratePromptFormProps {
  initialPrompt?: string;
}

export default function GeneratePromptForm({
  initialPrompt = "",
}: GeneratePromptFormProps) {
  const { pending } = useFormStatus();
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);

  const onSubmit = useCallback(async () => {
    try {
      const generatePromptRes = await generatePrompt();
      setGeneratedPrompt(generatePromptRes.prompt);

      return generatePromptRes;
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <section>
      <p>{generatedPrompt ?? initialPrompt}</p>

      <form action={onSubmit}>
        <button disabled={pending} type="submit">
          {pending ? "Generating Prompt..." : "Generate Prompt"}
        </button>
      </form>
    </section>
  );
}
