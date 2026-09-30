"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser } from "react-icons/fi";
import { FaRobot } from "react-icons/fa6";
import { TbSparkles } from "react-icons/tb";
import { answerQuery, getTextEmbedder } from "@/utils/textEmbedder";
import { Message } from "@/models/message";

export default function ChatCard() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! I'm John's AI assistant. Ask me anything about his projects, tech stack, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  // Ref attached directly to the scrollable message container
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  // Scroll ONLY the inner container to the bottom
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  // Warm up the MediaPipe Text Embedder (WASM runtime + model) as soon as the
  // card mounts, so the first message doesn't stall on the asset download.
  // Failures are handled per-message inside answerQuery.
  useEffect(() => {
    getTextEmbedder().catch(() => {});
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const userQuery = input.trim();
    if (!userQuery || isThinking) return;

    setInput("");

    // Append user message
    setMessages((prev) => [...prev, { sender: "user", text: userQuery }]);

    // Show the thinking indicator while the embedder matches a reply
    setIsThinking(true);
    try {
      const response = await answerQuery(userQuery);
      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="p-4 flex items-center justify-center w-full">
      <div className="w-full max-w-xl border border-zinc-200/80 bg-white rounded-2xl shadow-sm hover:border-zinc-900 transition-all duration-300 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-100 p-4 bg-zinc-50/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-black text-white">
              <TbSparkles className="text-base" />
            </div>
            <div>
              <h4 className="font-bebas text-xl tracking-wide uppercase text-zinc-900 leading-none">
                AI Assistant
              </h4>
            </div>
          </div>
        </div>

        {/* Message Log — ref attached directly to this container */}
        <div
          ref={messagesContainerRef}
          className="p-4 h-64 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-zinc-200"
        >
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-2.5 ${
                msg.sender === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-mono ${
                  msg.sender === "user"
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-100 border border-zinc-200 text-zinc-700"
                }`}
              >
                {msg.sender === "user" ? <FiUser /> : <FaRobot />}
              </div>
              <div
                className={`max-w-[80%] text-xs leading-relaxed p-3 rounded-2xl font-medium ${
                  msg.sender === "user"
                    ? "bg-zinc-900 text-white rounded-tr-none"
                    : "bg-zinc-100/80 border border-zinc-200/60 text-zinc-800 rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          {/* Thinking indicator while the embedder runs */}
          {isThinking && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-2.5"
              role="status"
              aria-label="Assistant is thinking"
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-mono bg-zinc-100 border border-zinc-200 text-zinc-700">
                <FaRobot />
              </div>
              <div className="max-w-[80%] text-xs leading-relaxed p-3 rounded-2xl font-medium bg-zinc-100/80 border border-zinc-200/60 text-zinc-800 rounded-tl-none flex items-center gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSend}
          className="border-t border-zinc-100 p-3 flex items-center gap-2 bg-white"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 text-xs font-medium bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white rounded-xl px-3.5 py-2.5 outline-none transition-all placeholder:text-zinc-400"
          />
          <button
            type="submit"
            disabled={isThinking}
            className="p-2.5 bg-black hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-colors shrink-0"
            aria-label="Send Message"
          >
            <FiSend className="text-sm" />
          </button>
        </form>
      </div>
    </div>
  );
}