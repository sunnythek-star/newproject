import { useState } from "react";
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  const [currentScreen, setCurrentScreen] = useState("home");

  return (
    <div className="App">
      {currentScreen === "home" ? (
        <Home onStart={() => setCurrentScreen("game")} />
      ) : (
        <Game onBack={() => setCurrentScreen("home")} />
      )}
    </div>
  );
}

export default App;

