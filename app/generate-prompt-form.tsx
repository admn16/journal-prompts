"use client";

import { generatePrompt } from "~/app/actions";
import { useCallback, useState } from "react";
import SubmitButton from "./submit-button";

export interface GeneratePromptFormProps {
  initialPrompt?: string;
}

export default function GeneratePromptForm({
  initialPrompt = "",
}: GeneratePromptFormProps) {
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
        <SubmitButton />
      </form>
    </section>
  );
}
