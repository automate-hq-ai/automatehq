import React, { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Send as SendIcon, AutoAwesome as AutoAwesomeIcon } from '@mui/icons-material';

interface Message {
  text: string;
  isUser: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: 'Our AI chat feature is coming soon! Stay tuned for an amazing experience with AutomateHQ GPT.', 
      isUser: false 
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Disabled functionality
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-16">
        {messages.map((message: Message, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.isUser
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="bg-white p-4 shadow-md">
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            placeholder="Coming soon..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 bg-gray-50"
            disabled={true}
          />
          <button
            type="submit"
            disabled={true}
            className="px-6 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed flex items-center space-x-2"
          >
            <SendIcon />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat; 