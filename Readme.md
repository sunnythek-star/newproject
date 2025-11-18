🎯 프로젝트 개요
프로젝트명

Speed Card Challenge — 1부터 20까지 빠르게 카드를 터치해 순서를 완성하고, 완료 시간을 측정하는 반응속도 게임

목표

사용자의 순발력과 집중력을 테스트하는 간단한 게임

타이머 기능을 통해 최종 기록 확인 가능

모바일 및 PC 환경에서 모두 반응형 지원

🧠 주요 기능 요약
기능명	설명	비고
카드 셔플 기능	1~20까지 카드가 무작위로 배치됨	게임 시작 시
카드 클릭 기능	올바른 순서(1→20)로 클릭 시 카드가 뒤집히며 점수 진행	
오답 클릭 처리	잘못된 숫자 클릭 시 shake 효과 또는 경고 표시	
타이머 기능	1번 카드를 클릭하면 타이머 시작 → 20번 클릭 시 정지	완료 시간 표시
결과 화면	최종 완료 시간 표시 및 “다시 시작” 버튼	
반응형 UI	모바일에서도 쉽게 플레이 가능하도록 카드 크기 자동 조정	
⚙️ 기술 스택
구분	사용 기술	설명
Frontend Framework	React (v18+)	컴포넌트 기반 SPA 구조
Styling	Tailwind CSS	빠르고 유연한 반응형 스타일링
State Management	React Hooks (useState, useEffect, useRef)	타이머, 게임 상태 관리
Animation	Framer Motion	카드 뒤집힘 및 클릭 애니메이션
Build Tool	Vite	빠른 개발 환경 구성
Optional	React Router	(추후 랭킹 페이지 등 확장 시)
🧩 화면 구성 플로우

시작 화면 (Start Screen)

게임 제목: “Speed Card Challenge”

“게임 시작” 버튼 클릭 시 → 카드 게임 화면으로 이동

게임 화면 (Game Screen)

4x5 그리드로 20개의 카드 표시

각 카드에는 숫자(1~20)가 숨겨져 있음 (뒤집힌 상태)

1번을 클릭하면 타이머 시작

올바른 순서대로 클릭 시 카드가 뒤집히며 다음 카드 클릭 가능

잘못된 번호 클릭 시 에러 애니메이션 표시

20번 클릭 시 타이머 정지 → 결과 화면으로 전환

결과 화면 (Result Screen)

“👏 당신의 기록: 12.83초”

“다시하기” 버튼 → 초기화 후 시작 화면으로 돌아감

🧱 폴더 구조 제안
src/
 ├── components/
 │    ├── Card.jsx           // 개별 카드 컴포넌트
 │    ├── Timer.jsx          // 타이머 표시 컴포넌트
 │    ├── ResultModal.jsx    // 결과 화면 모달
 │
 ├── pages/
 │    ├── Home.jsx           // 시작 화면
 │    ├── Game.jsx           // 메인 게임 화면
 │
 ├── hooks/
 │    ├── useTimer.js        // 타이머 로직 커스텀 훅
 │
 ├── utils/
 │    ├── shuffle.js         // 카드 셔플 유틸
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css

💡 핵심 컴포넌트 기능 정의
Card.jsx

props: number, isFlipped, onClick

올바른 순서로 클릭 시 isFlipped 상태 true로 변경

Framer Motion으로 flip 애니메이션 구현

useTimer.js
import { useState, useRef, useEffect } from "react";

export default function useTimer(isRunning) {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 0.01);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return time.toFixed(2);
}

🎨 UI/UX 컨셉

미니멀 & 컬러풀한 카드 인터페이스

각 카드 클릭 시 부드러운 “flip” 모션

배경은 밝은 파스텔톤 → 시각적 집중 유도

결과창은 축하 애니메이션 (🎉 confetti 효과)

📱 반응형 레이아웃 예시 (Tailwind)
<div className="grid grid-cols-4 gap-3 sm:grid-cols-5 max-w-md mx-auto">
  {/* 카드 컴포넌트 반복 */}
</div>