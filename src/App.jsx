import { useState } from "react";
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [gameStartTime, setGameStartTime] = useState(null);

  const handleGameStart = () => {
    // 게임 시작 시간을 기록하고 게임 화면으로 이동
    setGameStartTime(Date.now());
    setCurrentScreen("game");
  };

  const handleBackToHome = () => {
    setGameStartTime(null);
    setCurrentScreen("home");
  };

  return (
    <div className="App">
      {currentScreen === "home" ? (
        <Home onStart={handleGameStart} />
      ) : (
        <Game onBack={handleBackToHome} startTime={gameStartTime} />
      )}
    </div>
  );
}

export default App;

