"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const formStatus = useFormStatus();

  return (
    <button disabled={formStatus.pending} type="submit">
      {formStatus.pending ? "Generating Prompt..." : "Generate Prompt"}
    </button>
  );
}
