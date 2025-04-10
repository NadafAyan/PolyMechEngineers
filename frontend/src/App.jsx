import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-white max-w-md w-full animate-fade-in transition-all duration-700">
        <h1 className="text-4xl font-bold mb-4 text-center">🚀 Tailwind CSS</h1>
        <p className="text-lg text-gray-200 text-center">
          You're all set! Time to build something amazing with React & Tailwind.
        </p>
        <div className="mt-6 flex justify-center">
          <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-md hover:scale-105">
            Let's Go!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

