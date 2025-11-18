// Fisher-Yates 셔플 알고리즘으로 배열 무작위 섞기
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 1부터 20까지의 숫자 배열 생성 및 셔플
export function createShuffledCards() {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
  return shuffleArray(numbers);
}

