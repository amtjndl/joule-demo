"use client";
import { useState } from "react";
export default function ChatInput({
  onSend,
}: {
  onSend: (t: string) => void;
}) {
  const [value, setValue] = useState("");
  function submit() {
    if (!value.trim()) return;
    onSend(value.trim());
    setValue("");
  }
  return (
    <div className="border-t border-joule-border p-3 bg-white flex gap-3 items-center shadow-inner">
      <input
        className="flex-1 px-4 py-2.5 rounded-lg border border-joule-border bg-joule-surfaceAlt shadow-sm focus:ring-2 focus:ring-joule-blue focus:outline-none"
        placeholder="Ask your executive assistant..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      <button
        onClick={submit}
        className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-joule-gradient-start to-joule-gradient-end text-white font-medium shadow hover:opacity-90 transition"
      >
        Send
      </button>
    </div>
  );
}