import React from "react";
import Navbar from "./components/Navbar";
/*{import ThemeToggle from "./components/ThemeToggle";}*/

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-700">
        <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
      </div>
    </div>
  );
};