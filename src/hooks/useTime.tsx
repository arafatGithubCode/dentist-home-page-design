import { useEffect, useState } from "react";

export const useTimer = (numbers: number[]) => {
  const [counters, setCounters] = useState<number[]>(
    Array(numbers.length).fill(0)
  );

  useEffect(() => {
    if (numbers.length === 0) return;

    const maxNumbers = numbers;

    const intervals = maxNumbers.map((_, index) => {
      return setInterval(() => {
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          if (newCounters[index] < maxNumbers[index]) {
            newCounters[index] += 1;
            return newCounters;
          } else {
            clearInterval(intervals[index]);
            return newCounters;
          }
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return { counters };
};
