'use client'
import { useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! Welcome to Aakash Marketing. How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  // Predefined rules and responses
  const rules = [
    {
      patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
      response: 'Hello! How can I help you with your laptop repair or CCTV installation needs?'
    },
    {
      patterns: ['laptop', 'repair', 'service', 'fix', 'broken', 'problem'],
      response: 'We offer comprehensive laptop repair services including:\n• System Formatting\n• Battery Replacement\n• Screen Repair\n• Hard Disk Replacement\n• Overheating Issues\n• And more!\n\nVisit our Services page for complete details.'
    },
    {
      patterns: ['cctv', 'camera', 'security', 'surveillance', 'installation'],
      response: 'We provide professional CCTV installation, repair, and maintenance services. We work with all major brands and offer free installation with product purchase!'
    },
    {
      patterns: ['price', 'cost', 'charge', 'fee', 'rate', 'expensive', 'cheap'],
      response: 'Our pricing is competitive and varies based on the service. Please call us at 9099942639 or WhatsApp at 9825292471 for a detailed quote.'
    },
    {
      patterns: ['contact', 'phone', 'call', 'number', 'reach'],
      response: 'You can reach us at:\n📞 Call: 9099942639\n💬 WhatsApp: 9825292471\n📍 Location: Windsor Plaza, Alkapuri, Vadodara'
    },
    {
      patterns: ['address', 'location', 'where', 'directions', 'find'],
      response: 'We are located at:\nSB/17, Windsor Plaza, RC Dutt Rd, Aradhana Society, Vishwas Colony, Alkapuri, Vadodara, Gujarat 390007'
    },
    {
      patterns: ['hours', 'time', 'open', 'close', 'timing', 'schedule'],
      response: 'We are open until 9:00 PM every day except Sunday. We are closed on Sundays.'
    },
    {
      patterns: ['whatsapp', 'wa', 'message'],
      response: 'You can WhatsApp us at 9825292471 for quick assistance! Click here: https://wa.me/9825292471'
    },
    {
      patterns: ['product', 'buy', 'purchase', 'shop', 'store'],
      response: 'We offer a wide range of IT products including laptops, CCTV systems, networking equipment, and accessories. Visit our Products page to see our inventory!'
    },
    {
      patterns: ['warranty', 'guarantee'],
      response: 'We provide warranty on all our services and products. For specific warranty details, please contact us at 9099942639.'
    },
    {
      patterns: ['urgent', 'emergency', 'quick', 'fast', 'immediate'],
      response: 'We understand your urgency! Please call us immediately at 9099942639 for priority service.'
    },
    {
      patterns: ['thank', 'thanks', 'appreciate'],
      response: 'You\'re welcome! Happy to help. Feel free to ask if you have any other questions!'
    },
    {
      patterns: ['bye', 'goodbye', 'see you', 'later'],
      response: 'Thank you for contacting Aakash Marketing! Have a great day! 👋'
    }
  ];

  const findResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // Check each rule
    for (const rule of rules) {
      if (rule.patterns.some(pattern => lowerInput.includes(pattern))) {
        return rule.response;
      }
    }
    
    // Default response if no match
    return "I'm here to help! You can ask me about:\n• Laptop repair services\n• CCTV installation\n• Pricing and quotes\n• Contact information\n• Location and hours\n• Products we offer\n\nOr call us at 9099942639 for immediate assistance!";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    
    // Get bot response based on predefined rules
    const botResponse = findResponse(input);
    
    // Add bot response with slight delay for natural feel
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 500);
    
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-warning text-white p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
        >
          <FaRobot size={28} />
        </button>
      )}
      {isOpen && (
        <div className="bg-white w-96 h-[600px] rounded-lg shadow-2xl flex flex-col">
          <div className="bg-warning text-white p-5 flex justify-between items-center rounded-t-lg">
            <h3 className="font-semibold text-lg">Aakash Marketing Chatbot</h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition-colors">
              <FaTimes size={20} />
            </button>
          </div>
          <div className="flex-1 p-5 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <span
                  className={`inline-block p-3 rounded-lg text-sm ${
                    msg.sender === 'user' ? 'bg-warning text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                  style={{ whiteSpace: 'pre-line', maxWidth: '85%' }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-5 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-warning text-sm"
              placeholder="Type your message..."
            />
          </div>
        </div>
      )}
    </div>
  );
}