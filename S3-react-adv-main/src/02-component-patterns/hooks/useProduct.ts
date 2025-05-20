import { useEffect, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
  onChange?: (args: OnChangeArgs) => void;
  product: Product;
  value?: number;
}
interface UseProduct {
  counter: number;
  increaseBy: (value: number) => void;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: UseProductArgs): UseProduct => {
  const [counter, setCounter] = useState<number>(value);

  const increaseBy = (value: number): void => {
    const newValue = Math.max(counter + value, 0);

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
