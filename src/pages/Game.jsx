import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import Timer from "../components/Timer";
import ResultModal from "../components/ResultModal";
import useTimer from "../hooks/useTimer";
import { createShuffledCards } from "../utils/shuffle";

export default function Game({ onBack }) {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [nextNumber, setNextNumber] = useState(1);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [wrongCardId, setWrongCardId] = useState(null);
  const { time, reset: resetTimer } = useTimer(isTimerRunning);

  useEffect(() => {
    // 게임 시작 시 카드 셔플
    setCards(createShuffledCards());
    setFlippedCards(new Set());
    setNextNumber(1);
    setIsTimerRunning(false);
    setShowResult(false);
    resetTimer();
    setWrongCardId(null);
  }, []);

  const handleCardClick = (number, index) => {
    // 이미 뒤집힌 카드는 무시
    if (flippedCards.has(index)) {
      return;
    }

    // 첫 번째 카드(1번) 클릭 시 타이머 시작
    if (number === 1 && nextNumber === 1) {
      setIsTimerRunning(true);
    }

    // 올바른 순서인 경우
    if (number === nextNumber) {
      const newFlippedCards = new Set(flippedCards);
      newFlippedCards.add(index);
      setFlippedCards(newFlippedCards);
      setNextNumber(nextNumber + 1);
      setWrongCardId(null);

      // 20번까지 모두 완료한 경우
      if (number === 20) {
        setIsTimerRunning(false);
        setShowResult(true);
      }
    } else {
      // 잘못된 카드를 클릭한 경우
      setWrongCardId(index);
      setTimeout(() => {
        setWrongCardId(null);
      }, 500);
    }
  };

  const handleRestart = () => {
    setCards(createShuffledCards());
    setFlippedCards(new Set());
    setNextNumber(1);
    setIsTimerRunning(false);
    setShowResult(false);
    resetTimer();
    setWrongCardId(null);
  };

  const handleBackToHome = () => {
    handleRestart();
    onBack();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <button
          onClick={handleBackToHome}
          className="mb-4 text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          ← 홈으로
        </button>

        <Timer time={time} />

        <motion.div
          className="grid grid-cols-4 sm:grid-cols-5 gap-3 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ perspective: "1000px" }}
        >
          {cards.map((number, index) => (
            <Card
              key={`${number}-${index}`}
              number={number}
              isFlipped={flippedCards.has(index)}
              isWrong={wrongCardId === index}
              onClick={() => handleCardClick(number, index)}
            />
          ))}
        </motion.div>

        <ResultModal
          isOpen={showResult}
          time={time}
          onRestart={handleRestart}
        />
      </div>
    </div>
  );
}

