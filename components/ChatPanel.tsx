"use client";
import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
}
export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "assistant",
      text: "Hello! I'm your executive AI assistant. What would you like to explore today?",
    },
  ]);
  async function handleSend(text: string) {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      sender: "user",
      text,
    };
    setMessages((prev) => [...prev, userMsg]);
    // Simulated assistant response
    setTimeout(() => {
      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        sender: "assistant",
        text: mockReply(text),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    }, 600);
  }
  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-joule-surfaceAlt space-y-3">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      {/* Input */}
      <ChatInput onSend={handleSend} />
    </div>
  );
}
function mockReply(text: string) {
  if (text.toLowerCase().includes("summary"))
    return "Here's an executive summary reflecting the latest trends and insights.";
  if (text.toLowerCase().includes("graph"))
    return "I've updated the visuals in the analysis panel.";
  return "Got it. Analyzing your request now.";
}