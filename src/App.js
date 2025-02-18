import React from "react";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <ThemeToggle />
      </header>
      <main>
        <h2>My main content</h2>
      </main>
    </div>
  )
}

export default App;