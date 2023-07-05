import getAllProducts from "../lib/getAllProducts";
import getAllCollections from "../lib/getAllCollections";

// components
import ProductsList from "../components/ProductsList";

const Products = async () => {
  const products = await getAllProducts();
  const collections = await getAllCollections();

  return <ProductsList products={products} collections={collections} />;
};

export default Products;
