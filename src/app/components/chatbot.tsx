import { useState, useRef, useEffect } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ChatBot() {
  type ChatMessage = { role: 'user' | 'assistant'; content: string };

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // call API
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, userMsg] }),
    });
    const data = await res.json();
    if (data.text) {
      setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
    }
  };

  return (
    <div>
      {/* Chat Toggle Button */}
      <button
        aria-label="Open chat"
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center z-50"
      >
        {open ? <XMarkIcon className="w-6 h-6" /> : <ChatBubbleLeftRightIcon className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-16 right-4 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col z-50">
          <div className="p-2 border-b border-gray-200 dark:border-gray-700 font-semibold">
            Chat with GPT
          </div>
          <div className="flex-1 overflow-auto p-2 space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === 'user' ? 'text-right' : 'text-left'}
              >
                <span
                  className={
                    (m.role === 'user'
                      ? 'inline-block bg-blue-100 text-blue-800'
                      : 'inline-block bg-gray-100 text-gray-900') +
                    ' px-3 py-1 rounded-lg'
                  }
                >
                  {m.content}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-2 border-t border-gray-200 dark:border-gray-700 flex">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-2 py-1 border rounded-l-lg outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}