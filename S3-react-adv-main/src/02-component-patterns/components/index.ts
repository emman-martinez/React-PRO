import { ProductCardHOCProps } from "../interfaces/interfaces";
import ProductCardHOC from "./ProductCard";

import ProductButtons from "./ProductButtons";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";

export { default as ProductImage } from "./ProductImage";
export { default as ProductTitle } from "./ProductTitle";
export { default as ProductButtons } from "./ProductButtons";

const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
