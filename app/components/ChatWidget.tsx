"use client";

import { useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi — ask anything about Aryan’s projects, skills, or experience.",
    },
  ]);

  async function sendMessage() {
    if (!message.trim() || loading) return;

    const currentMessage = message.trim();

    setMessages((prev) => [...prev, { role: "user", text: currentMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply || "Something went wrong.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handlePromptClick(prompt: string) {
    setMessage(prompt);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-black text-white px-5 py-3 shadow-lg hover:opacity-90"
        >
          Ask about me
        </button>
      ) : (
        <div className="w-[340px] h-[500px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50">
            <h3 className="font-semibold text-black">Ask about Aryan</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-black text-white"
                    : "mr-auto bg-gray-100 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="max-w-[85%] p-3 rounded-2xl text-sm bg-gray-100 text-black">
                Typing...
              </div>
            )}
          </div>

          <div className="border-t p-3 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Ask a question..."
                className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-black text-white px-4 py-2 rounded-xl text-sm hover:opacity-90 disabled:opacity-50"
              >
                Send
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "What does Aryan study?",
                "Tell me about AutismoAI",
                "What skills does Aryan have?"
              ].map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handlePromptClick(prompt)}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}