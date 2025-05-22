import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
  initialValues?: InitialValues;
  onChange?: (args: OnChangeArgs) => void;
  product: Product;
  value?: number;
}
interface UseProduct {
  counter: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  increaseBy: (value: number) => void;
  reset: () => void;
}

export const useProduct = ({
  initialValues,
  onChange,
  product,
  value = 0,
}: UseProductArgs): UseProduct => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number): void => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount)
      newValue = Math.min(newValue, initialValues.maxCount);

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && counter === initialValues.maxCount,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
