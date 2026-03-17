type Props = {
  sender: "user" | "assistant";
  text: string;
};
export default function ChatMessage({ sender, text }: Props) {
  const isUser = sender === "user";
  return (
    <div className={`flex mb-2 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-sm text-sm leading-relaxed ${
          isUser
            ? "bg-joule-blue text-white"
            : "bg-joule-surfaceAlt border border-joule-border text-joule-text"
        }`}
      >
        {text}
      </div>
    </div>
  );
}