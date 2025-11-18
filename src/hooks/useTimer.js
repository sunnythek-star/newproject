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
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const reset = () => {
    setTime(0);
  };

  return { time: parseFloat(time.toFixed(2)), reset };
}

