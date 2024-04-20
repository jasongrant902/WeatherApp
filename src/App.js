import './App.css';
import './tailwind.css';
import Weather from './components/weather'
import React, { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App mx-auto mt-12 w-11/12 max-w-lg rounded-2xl h-118 p-5 text-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-green-400 text-black'}`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 p-2 rounded-full bg-blue-500 text-white focus:outline-none"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Weather />
    </div>
  );
}

export default App;
