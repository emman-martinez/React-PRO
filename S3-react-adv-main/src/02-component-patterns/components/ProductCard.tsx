import { createContext, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  InitialValues,
  OnChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues?: InitialValues;
  onChange?: (args: OnChangeArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
}

const ProductCard = ({
  children,
  className,
  initialValues,
  onChange,
  product,
  style,
  value,
}: Props) => {
  const { counter, isMaxCountReached, maxCount, increaseBy, reset } =
    useProduct({
      initialValues,
      onChange,
      product,
      value,
    });

  return (
    <Provider value={{ counter, maxCount, product, increaseBy }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            isMaxCountReached,
            maxCount,
            product,
            increaseBy,
            reset,
          })}
      </div>
    </Provider>
  );
};

export default ProductCard;
