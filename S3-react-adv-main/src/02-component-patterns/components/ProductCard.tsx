import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  OnChangeArgs,
  Product,
  ProductContextProps,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  onChange?: (args: OnChangeArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
}

const ProductCard = ({
  children,
  className,
  onChange,
  product,
  style,
  value,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;
