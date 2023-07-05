import getAllProducts from "../lib/getAllProducts";
import getAllCollections from "../lib/getAllCollections";

// components
import ProductsList from "../components/ProductsList";

const Products = async () => {
  const productsData = getAllProducts();
  const collectionsData = getAllCollections();

  const [products, collections] = await Promise.all([
    productsData,
    collectionsData,
  ]);

  return <ProductsList products={products} />;
};

export default Products;
