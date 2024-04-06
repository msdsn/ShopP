import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import { products, categories } from "./helper/data";
import "./App.scss";

function App() {
  return (
    <div>
      <Header categories={categories} text="HHHHHHHk" />
      <ProductList products={products} />
    </div>
  );
}

export default App;
