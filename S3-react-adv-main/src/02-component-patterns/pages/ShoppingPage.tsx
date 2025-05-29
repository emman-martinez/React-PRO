import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        initialValues={{ count: 6 /* maxCount: 10 */ }}
        product={product}
      >
        {({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
