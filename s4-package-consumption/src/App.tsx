import "./App.css";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "jeme-product-card";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

function App() {
  return (
    <>
      <div>
        <ProductCard
          initialValues={{ count: 6, maxCount: 10 }}
          product={product}
        >
          {({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
              {count}
              <button onClick={reset}>Reset</button>
            </>
          )}
        </ProductCard>
      </div>
    </>
  );
}

export default App;
