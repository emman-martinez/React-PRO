import { useState } from "react";

interface UseProduct {
  counter: number;
  increaseBy: (value: number) => void;
}

export const useProduct = (): UseProduct => {
  const [counter, setCounter] = useState<number>(0);

  const increaseBy = (value: number): void => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
};
