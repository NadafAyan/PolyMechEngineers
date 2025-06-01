import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Why should I switch from copper to graphite electrodes?",
    answer:
      "Graphite electrodes are 5x lighter, more cost-effective, and easier to machine than copper. They also offer a high metal removal rate and better thermal resistance, making them ideal for high-precision EDM applications.",
  },
  {
    question: "What are the different grades of graphite you offer?",
    answer:
      "We offer PO-7, PO-9, PO-8, PO-12, and GPO — each tailored for different applications such as forging dies, plastic molds, and casting.",
  },
  {
    question: "What industries use your electrodes?",
    answer:
      "Our graphite electrodes are used in automotive, aerospace, medical, and plastic mold industries for high-performance EDM applications.",
  },
  {
    question: "Where are you located?",
    answer:
      "22/68, 9th Lane, Ganesh Nagar, Industrial Estate, Ichalkaranji – 416115, Maharashtra.",
  },
  {
    question: "How can I contact you?",
    answer:
      "Call us at +91 9665756396 / 9422582439 or Email us at polymecheng@gmail.com.",
  },
  {
    question: "Do you provide custom solutions?",
    answer:
      "Yes! We tailor die and mold solutions for complex shapes and unique industry requirements.",
  },
  {
    question: "Are you ISO certified?",
    answer: "Yes, we are an ISO 9001 Certified Company.",
  },
  {
    question: "What makes your graphite different?",
    answer:
      "We use premium raw materials with tight production control. Our electrodes offer unmatched dimensional stability and thermal resistance.",
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // Tailwind sm breakpoint

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleQuestion = (index) => {
    setSelected(selected === index ? null : index);
  };

  // Determine button text based on open state and screen size
  const buttonText = () => {
    if (isMobile) {
      return isOpen ? "X" : "Help";
    } else {
      return isOpen ? "Close Chat" : "Need Help?";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {buttonText()}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-4 w-[340px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#1e1e1e] text-white px-6 py-4 text-xl font-semibold">
              PolyMech Assistant
            </div>

            {/* Scrollable FAQ */}
            <div
              className="flex-1 p-4 overflow-y-auto scroll-smooth space-y-4"
              data-lenis-prevent
            >
              {faqData.map((item, index) => (
                <div key={index}>
                  <button
                    className="text-left text-black font-medium hover:text-yellow-500 focus:outline-none w-full"
                    onClick={() => toggleQuestion(index)}
                  >
                    ❓ {item.question}
                  </button>
                  <AnimatePresence>
                    {selected === index && (
                      <motion.p
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-gray-700 text-sm bg-gray-100 p-3 rounded-lg overflow-hidden"
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-[#f9f9f9] text-center p-3 text-sm text-gray-500">
              PolyMech Engineers © 2025
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;