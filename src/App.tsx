import { useEffect, useState } from "react";

import "./theme/main.css";
import Hero from "./components/organisms/hero/Hero";

type Theme = "theme-one" | "theme-two";

function App() {
  const [theme, setTheme] = useState<Theme>("theme-one");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "theme-one" ? "theme-two" : "theme-one"
    );
  };

  useEffect(() => {
    // Just for demo purposes, we're setting the theme on the root element. 🐸
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    // Ideally, theme should be passed down to all components that need it
    // but for the sake of simplicity, we're only passing it to the Hero component. 🐸
    <main>
      <Hero />
      <button id="theme-toggle" onClick={toggleTheme}>
        🎨
      </button>
    </main>
  );
}

export default App;
