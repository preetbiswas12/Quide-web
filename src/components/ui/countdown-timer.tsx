import React, { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

const COUNTDOWN_FROM = "2025-09-04T12:00:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type TimeUnit = "Day" | "Hour" | "Minute" | "Second";

export default function ShiftingCountdown() {
  return (
    <section className="flex items-center justify-center bg-transparent text-white py-2 transition-colors duration-500">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl">
        <CountdownItem unit="Day" label="Days" />
        <CountdownItem unit="Hour" label="Hours" />
        <CountdownItem unit="Minute" label="Minutes" />
        <CountdownItem unit="Second" label="Seconds" />
      </div>
    </section>
  );
}

function CountdownItem({ unit, label }: { unit: TimeUnit; label: string }) {
  const { ref, time } = useTimer(unit);
  const display = unit === "Second" ? String(time).padStart(2, "0") : time;

  return (
    <div className="flex flex-col items-center justify-center gap-1.5 px-3 py-3 bg-transparent rounded-2xl shadow-md">
      <div className="relative w-full overflow-hidden text-center h-16 flex items-center justify-center">
        <span
          ref={ref}
          className="block text-5xl sm:text-6xl font-mono font-bold text-white transition-all duration-300"
        >
          {display}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

function useTimer(unit: TimeUnit) {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeRef = useRef<number>(0);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    handleCountdown(); // Initial call
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM).getTime();
    const now = new Date().getTime();
    const distance = end - now;

    let newTime = 0;
    switch (unit) {
      case "Day":
        newTime = Math.max(0, Math.floor(distance / DAY));
        break;
      case "Hour":
        newTime = Math.max(0, Math.floor((distance % DAY) / HOUR));
        break;
      case "Minute":
        newTime = Math.max(0, Math.floor((distance % HOUR) / MINUTE));
        break;
      case "Second":
        newTime = Math.max(0, Math.floor((distance % MINUTE) / SECOND));
        break;
    }

    if (newTime !== timeRef.current) {
      await animate(ref.current, { y: ["0%", "-50%"], opacity: [1, 0] }, { duration: 0.3 });
      timeRef.current = newTime;
      setTime(newTime);
      await animate(ref.current, { y: ["50%", "0%"], opacity: [0, 1] }, { duration: 0.3 });
    }
  };

  return { ref, time };
}
