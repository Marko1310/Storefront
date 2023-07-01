import medusaClient from "../lib/config";

// components
import ProductsList from "../components/ProductsList";

const Products = async () => {
  const { products: products } = await medusaClient.products.list();

  return <ProductsList products={products} />;
};

export default Products;
